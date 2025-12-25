import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        const { email, password } = credentials;
        // get users from dB
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) return null;
        // match password
        const match = await bcrypt.compare(password, user.password);
        if (!match) return null;

        return {
          id: user.id,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.email = token.email;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST}
