import NextAuth, { type DefaultSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google' // Import the Google provider

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession['user']
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    GitHub,
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    jwt({ token, profile }) {
      console.log('Profile:', profile); // Log the profile
      if (profile) {
        token.id = profile.id
        token.image = profile.avatar_url || profile.picture
      }
      console.log('Token after jwt callback:', token); // Log the token after adding id and image
      return token
    },
    session: ({ session, token }) => {
      console.log('Session before callback:', session); // Log the session before the callback
      console.log('Token before callback:', token); // Log the token before the callback
      if (session?.user && token?.id) {
        session.user.id = String(token.id)
      }
      console.log('Session after callback:', session); // Log the session after the callback
      return session
    },
    authorized({ auth }) {
      return !!auth?.user // this ensures there is a logged in user for -every- request
    }
  },
  pages: {
    signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
  }
})


