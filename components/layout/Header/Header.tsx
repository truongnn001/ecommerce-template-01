'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useCartStore } from '@/lib/stores/cartStore';
import MegaMenu from './MegaMenu';
import {
  equipmentSuppliesMegaMenu,
  productsMegaMenu,
  equipmentMegaMenu,
  brandsMegaMenu,
} from '@/lib/data/megaMenuData';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const totalItems = useCartStore((state) => state.getTotalItems());

  const navigation = [
    {
      name: 'Equipment & Supplies',
      href: '/categories',
      megaMenu: equipmentSuppliesMegaMenu,
    },
    {
      name: 'Products',
      href: '/products',
      megaMenu: productsMegaMenu,
    },
    {
      name: 'Equipment',
      href: '/equipment',
      megaMenu: equipmentMegaMenu,
    },
    { name: 'Modalities', href: '/modalities' },
    {
      name: 'Brands',
      href: '/brands',
      megaMenu: brandsMegaMenu,
    },
    { name: 'Save Now!', href: '/deals' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-brand-purple-600 py-2 text-center text-sm text-white">
        Free shipping on $749+ | $4.99 shipping on $199+
      </div>

      {/* Main Header */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-brand-purple-600">
            Universal Companies
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 lg:flex">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.name)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-purple-600 transition-colors"
                >
                  {item.name}
                  {item.megaMenu && (
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeMegaMenu === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {item.megaMenu && (
                  <MegaMenu
                    data={item.megaMenu}
                    isOpen={activeMegaMenu === item.name}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-700 hover:text-brand-purple-600">
              <FiSearch className="h-5 w-5" />
            </button>

            {/* Account */}
            <Link href="/account" className="text-gray-700 hover:text-brand-purple-600">
              <FiUser className="h-5 w-5" />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative text-gray-700 hover:text-brand-purple-600">
              <FiShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-purple-600 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="border-t py-4 lg:hidden">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      item.megaMenu
                        ? setActiveMegaMenu(activeMegaMenu === item.name ? null : item.name)
                        : setIsMobileMenuOpen(false)
                    }
                    className="flex w-full items-center justify-between py-2 text-left text-gray-700 hover:text-brand-purple-600"
                  >
                    <Link href={item.href} onClick={() => !item.megaMenu && setIsMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                    {item.megaMenu && (
                      <FiChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeMegaMenu === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {item.megaMenu && activeMegaMenu === item.name && (
                    <div className="ml-4 mt-2 space-y-3 border-l-2 border-gray-200 pl-4">
                      {item.megaMenu.columns.map((column) => (
                        <div key={column.id}>
                          {column.title && (
                            <p className="mb-1 text-sm font-semibold text-gray-900">
                              {column.title}
                            </p>
                          )}
                          <ul className="space-y-1">
                            {column.items.map((subItem) => (
                              <li key={subItem.id}>
                                <Link
                                  href={subItem.href}
                                  className="block py-1 text-sm text-gray-600 hover:text-brand-purple-600"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
