'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <Head>
        <title>Weather App</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
