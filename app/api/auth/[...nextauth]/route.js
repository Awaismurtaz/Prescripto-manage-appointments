// import { prisma } from "@/lib/prisma";
// import bcrypt from "bcryptjs"
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export async function POST(req){
//  try {
//     const body=await req.json();
//     const {email, password}=body;
// // check existing user
//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });

//     if(!existingUser){
//         return NextResponse.json(
//             {success:false, message:"user not register"},
//             {status:404}
//         )
//     }
// // compare password

// const isPasswordValid=await bcrypt.compare(password, existingUser.password);

// if(!isPasswordValid){
//     return NextResponse.json(
//         {success:false, message:"invalid password"},
//         {status:401}
//     )
// }

// // make jwt token

// const token=jwt.sign(
//     {
//         id:existingUser.id,
//         email:existingUser.email,
//         role:existingUser.role
//     },
//     process.env.JWT_SECRET,
//     {expiresIn:"7d"}
// )

// // userWithOutPassword
// const userWithOutPassword= {...existingUser, password:undefined};

// return NextResponse.json(
//     {
//     success:true,
//     message:"user login successfully",
//     user:userWithOutPassword,
//     token
//    },
//    {
//     status:200
//    }
// )

//  } catch (error) {
//     console.log(error)
//     return  NextResponse.json({ success:false,message:"Something went wrong"},{status:500})
//  }
// }

// with next Auth

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
