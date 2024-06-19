export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-pink-50 min-h-screen font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  );
}
