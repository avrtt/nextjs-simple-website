import { font } from "@/app/(root)/layout";
import getAppPage from "@/components/cards/app-page/data/get-object";
import Providers from "@/lib/provider";
import metadataBuilder from "@/metadata/builder";
import { Metadata } from "next";
import "./../../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          font.className +
          " w-full h-full bg-lighter dark:bg-darker min-h-screen flex flex-col justify-center items-center max-w-3xl m-auto px-4 xs:px-10"
        }
      >
        <Providers>
          <main className="h-full w-full justify-center items-center m-auto py-4 xs:py-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

export function generateMetadata({
  params,
}: {
  params: any;
}): Metadata | undefined {
  const { id } = params;
  const page = getAppPage(id);
  const app = page?.app;
  if (!page || !app) return;
  const res = metadataBuilder(app.title, app.description, {
    og: app.image,
    icons: {
      icon: app.icon ?? app.image,
      shortcut: app.image,
      apple: app.image,
    },
    path: `/${id}`,
    keywords: app.keywords ?? app.tags,
  });
  res.twitter = {
    card: "app",
    site: "@", // self-hosted
    description: app.description,
    app: {
      id: {
        googleplay: page.playstoreId,
        // iphone: page.appstoreId,
        // ...
      },
      name: app.title,
      url: {
        googleplay: app.playstore,
        // iphone: app.appstore,
        // ...
      },
    },
  };
  return res;
}
