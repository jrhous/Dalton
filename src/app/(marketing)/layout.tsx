import { SkipLink } from "@/components/layout/skip-link";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipLink />
      <TopBar />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
