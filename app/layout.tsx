export const metadata = {
  title: "Se7enGPT Actions",
  description: "API backend for Se7enGPT"
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