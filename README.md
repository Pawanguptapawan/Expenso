<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


# Initiating Project:
1.npx create-next-app@latest
2.npm run dev

# Install dependencies:
1.npx shadcn@latest init
2.npx shadcn@latest add button
3.npx shadcn@latest add avatar badge calendar dialog input popover radio-group select slider sonner tabs textarea

# logos 
make logos

# fonts 
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

# make header.jsx in components folder 

# convex for databases
npm install convex
npx convex dev

make a convex-client-provider in components
wrap the layout in ConvexClientProvider

# for authentication

npm install @clerk/nextjs

The clerkMiddleware helper enables authentication and is where you'll configure your protected routes.

it run before the application and if user is not signed in then i will nogt allow to go to the protected routes

wrap the body layout in ClerkProvider.


in components/header.jsx
<SignedOut>
      <SignInButton />
      <SignUpButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>



after it we created auth folder for default routing
sign-in/[[...sign-in]]/page.jsx

sign-up/[[...sign-up]]//page.jsx

create a file into auth/layout.jsx  for authentication


in layout.jsx i just modify the page and add a backgroud image.


with the authentication we want to create a schema for user database.

so we crrate a file in convex folder/schema.jsx

after creating this schema , we create afile convex/auth.config.js for setting the issuer URL 
issuer URL in .env NEXT_CLERK_FRONTEND_ALI_URL

create a file into convex/users.js
Mutation for storing current user


create a folder for hooks
hooks/user-store-user.js
Calling the store user mutation from React
You can call this mutation when the user logs in from a useEffect hook. After the mutation succeeds you can update local state to reflect that the user has been stored.
use into components/headers


npm i next-spinners --legacy-peer-daps

