export default function CategoriesPage() {
  const categories = [
    { name: 'Skin Care', count: 245, icon: '🧴' },
    { name: 'Lash & Brow', count: 89, icon: '👁️' },
    { name: 'Massage', count: 156, icon: '💆' },
    { name: 'Waxing', count: 78, icon: '🕯️' },
    { name: 'Manicure/Pedicure', count: 134, icon: '💅' },
    { name: 'Makeup', count: 198, icon: '💄' },
    { name: 'Hair Care', count: 167, icon: '💇' },
    { name: 'Spa Equipment', count: 92, icon: '🛋️' },
  ];

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Shop by Category
        </h1>
        <p className="text-gray-600">
          Browse our comprehensive selection of spa and salon categories
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="card card-hover p-6 text-center transition-all"
          >
            <div className="mb-4 text-6xl">{category.icon}</div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600">{category.count} products</p>
          </a>
        ))}
      </div>
    </div>
  );
}
