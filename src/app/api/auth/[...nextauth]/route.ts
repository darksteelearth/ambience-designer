import { addUser } from "@/actions/addUser";
import { checkIfUserExists } from "@/actions/checkIfUserExists";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      if (await checkIfUserExists(user.email)) return true;
      const newUser = addUser(user.name ?? "No Name User", user.email);
      return !!newUser;
    }
  }
});

export { handler as GET, handler as POST };