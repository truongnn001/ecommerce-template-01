export default function AccountPage() {
  return (
    <div className="card p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Account Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Recent Orders
          </h3>
          <p className="text-gray-600">You have no recent orders</p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            Account Details
          </h3>
          <p className="text-gray-600">
            Manage your account information and preferences
          </p>
        </div>
      </div>
    </div>
  );
}
