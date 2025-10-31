import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            The Spa Industry&apos;s Top Distributor for Over 40 Years!
          </h2>
          <p className="text-lg text-gray-600">
            What customers are saying about our product selection and service
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mb-4 text-gray-700">
              &quot;I have been dealing with Universal for over 30 yrs now and have never been 
              disappointed in a product or their great customer service. Thank you for making my 
              job easier as a Clinic Esthetician.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-100 text-brand-purple-600">
                LW
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Laura W.</p>
                <p className="text-sm text-gray-600">Esthetician</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mb-4 text-gray-700">
              &quot;🌟 🎉 All your needs in one place like being at a party store! 
              Amazing selection and fast shipping. Highly recommend!&quot;
            </p>
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-100 text-brand-purple-600">
                KH
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Kiara H.</p>
                <p className="text-sm text-gray-600">Owner/Operator</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="mb-4 text-gray-700">
              &quot;Outstanding quality and service! The educational resources have been 
              invaluable for my team. We trust Universal for all our spa supplies.&quot;
            </p>
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-100 text-brand-purple-600">
                SM
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-600">Spa Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-brand-purple-600">84,000+</div>
            <p className="text-gray-600">Active Customers</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-brand-purple-600">47</div>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-brand-purple-600">40+</div>
            <p className="text-gray-600">Years in Business</p>
          </div>
        </div>
      </div>
    </section>
  );
}
