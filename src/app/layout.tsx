import db from "@/lib/supabase/db";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Notion",
  description: "All your notes in one place",
};

const Root = () => {
  return (
    <html>
      <Head>
        <meta name="description" content={metadata.description as string} />
        <title>{metadata.title as string}</title>
      </Head>
      <body>
        {console.log(db)}
        <h1>Server is Running...</h1>
      </body>
    </html>
  );
};

export default Root;
