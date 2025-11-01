import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pt-[120px]">
        <div className="container-custom py-8">
          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <aside className="w-64">
              <nav className="card p-4">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  My Account
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/account"
                      className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="/account/orders"
                      className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="/account/profile"
                      className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/account/addresses"
                      className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Addresses
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
