'use client';

import { FiTruck, FiDollarSign, FiShield, FiAward, FiHeart, FiBook } from 'react-icons/fi';

const features = [
  {
    icon: FiTruck,
    title: 'Free Shipping',
    description: 'On orders $749+',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: FiDollarSign,
    title: 'Reduced Shipping',
    description: '$4.99 on orders $199+',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: FiShield,
    title: 'Quality Guaranteed',
    description: 'Tested & approved',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: FiAward,
    title: '40+ Years',
    description: 'Industry leader',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
  {
    icon: FiHeart,
    title: 'Good Karma Rewards',
    description: 'Earn points on every purchase',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: FiBook,
    title: 'Free Education',
    description: 'CEU courses available',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

export default function ValueProps() {
  return (
    <section className="bg-gradient-to-br from-brand-purple-600 to-brand-purple-700 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white/10 p-6 text-center text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <div className={`mb-4 rounded-full ${feature.bgColor} p-4`}>
                  <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <p className="text-sm text-purple-100">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
