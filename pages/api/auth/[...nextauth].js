import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
    providers: [
        GoogleProvider({
          clientId: "726224314595-sn05q8g1ni219kps2h15ct8rl46frl5v.apps.googleusercontent.com",
          clientSecret: "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"
        }),
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions)