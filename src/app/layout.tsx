import type { Metadata } from "next";
import { Ubuntu_Mono as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/util/providers";
import ChangeTheme from "@/components/util/change-theme";

const fontSans = FontSans({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Kryp.Dev",
    description: "Built by Kryp",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <Providers>
                    <ChangeTheme />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
