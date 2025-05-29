export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-black p-10">
      {/* Custom layout for About pages only */}
      <h1 className="text-3xl font-bold mb-4">About Us Layout</h1>
      {children}
    </div>
  );
}
