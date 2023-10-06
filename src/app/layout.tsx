"use client";

import "./globals.css";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { alchemyProvider } from "wagmi/providers/alchemy";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, optimism, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import Navbar from "@/components/Navbar";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_ID) }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Suggested",
    wallets: [metaMaskWallet({ chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex items-center flex-col">
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <CacheProvider>
              <ChakraProvider>
                <main className="max-w-screen-2xl md:min-w-[1280px]">
                  <Navbar />
                  {children}
                </main>
              </ChakraProvider>
            </CacheProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
