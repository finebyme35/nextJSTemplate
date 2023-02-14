import { routing } from "constant/baseUrlConstant";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";




export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "otonakit-dashboard",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        userName: {
          label: "Email Adresinizi Giriniz.",
          type: "email",
        },
        password: { label: "Şifre Giriniz.", type: "password" },
      },
      async authorize(credentials) {
        const payload = {
          userName: credentials?.userName,
          password: credentials?.password,
        };

        const response = "request geliyor";
        if (response) {
          // let user: User = {
          //     id: '1',
          //     name: response.data.accessToken,
          //     email: payload.userName
          // }
          // return user;
          let user: User = {
            id: "1",
            userRole: "admin",
            accessToken: "sdasdsadsa"
          };

          return user;
        }
        return null;

        // Return null if user data could not be retrieved
      },
    }),
    // ...add more providers here
  ],
  secret: "my-32-character-ultra-secure-and-ultra-long-secret",

  pages: {
    signIn: "/dashboard/auth/signin",
    signOut: "/auth/signout",
    error: "/dashboard/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken:
    {
        name: `dashboard_next-auth.session-token`,
        options: {
            sameSite: 'lax',
            path: routing,
        },
    },
  },
  callbacks: {
    async redirect({ url }) {
      return url;
    },
    async jwt({ token, user, account }) {
      token.userRole = "admin";
      if (account && user) {
        return {
          ...token,
          userRole: user.userRole,
          accessToken: user.accessToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.userRole = token.userRole as string;
      session.user.accessToken = token.accessToken as string;
      return session;
    },
  },
  // Enable debug messages in the console if you are having problems
  // debug: process.env.NODE_ENV === 'development',
});
