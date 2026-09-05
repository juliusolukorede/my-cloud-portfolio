import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julius Olukorede | Cloud & DevOps Engineer",
  description:
    "Cloud and DevOps Engineer specializing in AWS, Azure, Linux, Docker, Kubernetes, Terraform and CI/CD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}