import prisma from '@/lib/prisma';
import { comparePassword } from '@/lib/utils';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (!user) {
          throw new Error('Email maybe wrong');
        }

        const isMatch = await comparePassword(
          credentials?.password!!,
          user.password
        );

        if (!isMatch) {
          throw new Error('Password maybe wrong');
        }

        const isAdmin = user.role === 'admin';

        if (!isAdmin) {
          throw new Error('You are not admin');
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default authOptions;
