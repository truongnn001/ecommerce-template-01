import Link from 'next/link';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal Header for checkout flow */}
      <header className="border-b bg-white py-4">
        <div className="container-custom">
          <Link href="/" className="text-2xl font-bold text-brand-purple-600">
            Universal Companies
          </Link>
        </div>
      </header>
      <main className="min-h-screen bg-gray-50">{children}</main>
    </>
  );
}
