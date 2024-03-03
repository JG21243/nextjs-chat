import { requireAuth } from '@clerk/nextjs/api';
import { kv } from '@vercel/kv';
import { type Chat } from '@/lib/types';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const POST = requireAuth(async ({ auth, request }) => {
  const json = await request.json();
  const { messages, previewToken } = json;
  const userId = auth.userId;

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  if (previewToken) {
    openai.apiKey = previewToken;
  }

  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    stream: true,
  });

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100);
      const id = json.id ?? nanoid();
      const createdAt = Date.now();
      const path = `/chat/${id}`;
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant',
          },
        ],
      };
      await kv.hmset(`chat:${id}`, payload);
      await kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`,
      });
    },
  });

  return new StreamingTextResponse(stream);
});