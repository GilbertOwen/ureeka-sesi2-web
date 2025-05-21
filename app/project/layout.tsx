export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#ECFAE5] min-h-screen">
      {children}
    </div>
  );
}