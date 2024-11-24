"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientLanguageInit from "./components/ClientLanguageInit";
import { SupportedLocale } from "@/types/lang";

export default function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: SupportedLocale;
}) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ClientLanguageInit locale={locale}>{children}</ClientLanguageInit>
    </QueryClientProvider>
  );
}
