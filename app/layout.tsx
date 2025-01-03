import "@/styles/tailwind.css";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Container from "@/components/main/container";
import Main from "@/components/main/main";
import seoConfig from "@/config/layout/seo";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Inter as FontSans } from "next/font/google";

// Font Configuration
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Tim | %s",
    default: seoConfig.title,
  },
  generator: seoConfig.author.name,
  applicationName: seoConfig.title,
  description: seoConfig.description,
  referrer: "origin-when-cross-origin",
  keywords: seoConfig.keywords,
  authors: [
    {
      name: seoConfig.author.name,
      url: seoConfig.author.twitterUrl,
    },
  ],
  // Add other metadata properties as needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
        <body className={`antialiased ${fontSans.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Main>
              <Header />
              <Container>{children}</Container>
              <Footer />
            </Main>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
