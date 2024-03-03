import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'

export interface ChatPageProps {
  params: {
    id: string
  }
}

import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const chat = await getChat(Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id ?? '', context.req ?? {})

  if (!chat) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      chat,
    },
  }
}

export default function ChatPage({ chat }) {
  return <Chat id={chat.id} initialMessages={chat.messages} />
}

