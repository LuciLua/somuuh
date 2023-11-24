import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    // signIn: '/auth/signin'
  },
  //   vai pra essa pagina assim que invocar a funcao sigin/signout no useSession!
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };