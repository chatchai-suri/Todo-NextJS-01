import "@/app/globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Meta data
// Home | Basic Todo
// Login | Basic Todo

export const metadata: Metadata = {
  title: {
    template: "%s | Basic Todo",
    default: "Basic Todossss",
  },
  description: "The best todo list app. It's free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${popins.className}`}>
      <body >{children}</body>
    </html>
  );
}
