import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma/connect";
import { createProfile } from "@/lib/prisma/crud/create/createProfile";
import { createUsername } from "@/lib/prisma/crud/create/createUsername";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // Events
  events: {
    createUser: async ({ user }) => {
      // give the user a username && profile
      if (!user) return redirect("/auth/api/signin");
      await createUsername(user.email);
      await createProfile(user.id);
    },
  },
  callbacks: {
    async session({ user, session }) {
      session.id = user.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
