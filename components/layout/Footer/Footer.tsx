import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Customer Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping & Return
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-white">
                  Good Karma Rewards
                </Link>
              </li>
            </ul>
          </div>

          {/* Spa Business Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Spa Business Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learning" className="hover:text-white">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="/spa-development" className="hover:text-white">
                  Spa Development
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white">
                  School Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Shopping & Offers */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Shopping & Offers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalogs" className="hover:text-white">
                  Browse Catalogs
                </Link>
              </li>
              <li>
                <Link href="/outlet" className="hover:text-white">
                  UCo Outlet
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-white">
                  Financing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-white">
              Sign up for Our Free Newsletter!
            </h3>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-md border-0 px-4 py-2 text-gray-900"
              />
              <button className="rounded-r-md bg-brand-purple-600 px-6 py-2 text-white hover:bg-brand-purple-700">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FiFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiYoutube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm">
          <p>© 2025 Universal Companies - All rights reserved</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
