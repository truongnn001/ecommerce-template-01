import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/components/ui/FadeInSection/FadeInSection';
import Button from '@/components/ui/Button/Button';

export const metadata = {
  title: 'Spa Development Services - Universal Companies',
  description: 'Your One-Stop Solution for Spa Development. Expert Planning, Product Selection, Logistics, and Support.',
};

const services = {
  dreamIt: [
    {
      id: 1,
      title: 'Space Planning',
      description: 'We help you maximize your floor plan. Our consultants help address traffic patterns, cabinets, and furniture elements that optimize your space.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400',
    },
    {
      id: 2,
      title: 'Treatment Menu Development',
      description: 'Our team works with you to develop signature treatments that are both safe, cost effective, and introduce growth potential to your bottom line.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400',
    },
    {
      id: 3,
      title: 'Custom Furniture Sourcing',
      description: 'Let us help you find or make your one-of-a-kind furniture solutions and furnishings that enhance your salon and spa brand.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400',
    },
  ],
  buildIt: [
    {
      id: 1,
      title: 'Consignment Coordination',
      description: 'We offer consolidated consignment solutions allowing you to manage one freight charge and one partial delivery time.',
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=300',
    },
    {
      id: 2,
      title: 'Installation and Setup',
      description: 'Need help with the technical aspects of equipment set up? We can help with installation, training and post-installation calls.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300',
    },
    {
      id: 3,
      title: 'Testing and Quality Assurance',
      description: 'We will test order for quantity and quality before we ship to assure all items are as ordered and in perfect condition.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300',
    },
    {
      id: 4,
      title: 'Floor Touches',
      description: 'Need a few extra touches on site even days right before your big opening? We can help.',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300',
    },
  ],
  runIt: [
    {
      id: 1,
      title: 'Staff Training on Equipment & Protocols',
      description: 'Extensive training resources and customer support ensure your investment pays off.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400',
    },
    {
      id: 2,
      title: 'Ongoing Support',
      description: 'Our product specialists and inventory sourcing team help you navigate regulatory systems. We provide educational and performance benchmarking resources.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400',
    },
    {
      id: 3,
      title: 'Effortless Restocking',
      description: 'Easily submit drop-ship orders automated with our auto-ship program. We can deliver your spa needs every period.',
      image: 'https://images.unsplash.com/photo-1556228578-dd4e4e4ff9be?w=600&h=400',
    },
  ],
};

const partners = [
  'VICEROY',
  'SUGAR BEACH',
  'La PLAYA',
  'HILTON HOTELS',
  'Fairmont',
  'Canareef',
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <FadeInSection>
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-blue-700 py-20">
          <div className="container-custom relative z-10">
            <div className="mx-auto max-w-4xl text-center text-white">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Your One-Stop Solution for Spa Development
              </h1>
              <p className="mb-8 text-xl">
                We help you with Expert Planning, Product Selection, Logistics, and Support
              </p>
              <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
                Get Started
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20" />
        </section>
      </FadeInSection>

      {/* Intro */}
      <FadeInSection delay={100}>
        <section className="py-16">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                From Small Day Spas to World-Class Destination Resorts, We Make Development Dreams Come True!
              </h2>
              <p className="text-lg text-gray-600">
                No matter the size of your spa operation, we have to make your dream a reality. Whether your
                requirements are primarily spa products and protocols, or you need the full-service help in
                planning and bringing your dream project to completion.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400"
                  alt="Dream It"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Dream It: Design & Space Planning</h3>
                  <p className="text-sm">Let us provide innovative solutions for your spa</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400"
                  alt="Build It"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Build It: Logistics & Project Management</h3>
                  <p className="text-sm">We make shipping seamless in your deployment and turnkey</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
                <Image
                  src="https://images.unsplash.com/photo-1552693673-1bf958298229?w=600&h=400"
                  alt="Run It"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">Run It: Training & Ongoing Support</h3>
                  <p className="text-sm">We deliver full ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Dream It Section */}
      <FadeInSection delay={200}>
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Dream It: Design, Menu Development & Space Planning
              </h2>
              <p className="text-lg text-gray-600">
                Let us help you turn your dream spa into reality by defining your target spa experience and
                needs in three important aspects of your opening strategy:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {services.dreamIt.map((service) => (
                <div
                  key={service.id}
                  className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Build It Section */}
      <FadeInSection delay={300}>
        <section className="py-16">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Build It: White-Glove Logistics and Project Management
              </h2>
              <p className="text-lg text-gray-600">
                Our proven services ensure industry-leading pricing with services that ease stress: small order
                cash discounts and we can take the burden out of your spa development plans.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.buildIt.map((service) => (
                <div
                  key={service.id}
                  className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
                >
                  <div className="relative h-40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button>View More</Button>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Run It Section */}
      <FadeInSection delay={100}>
        <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Run It: Training & Ongoing Support
              </h2>
              <p className="text-lg text-gray-600">
                Our partnership doesn't end at delivery. We're there to ensure you can operate and stay
                competitive with robust training and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {services.runIt.map((service) => (
                <div
                  key={service.id}
                  className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Partners Section */}
      <FadeInSection delay={200}>
        <section className="bg-gray-100 py-16">
          <div className="container-custom">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Our Work and Trusted Partners
              </h2>
              <p className="text-lg text-gray-600">
                Each project we undertake reflects our passion for innovation and excellence. See how we've
                transformed visions into stunning, successful spas worldwide.
              </p>
            </div>

            <div className="mb-12">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-teal-600">•</span>
                  <span>
                    <strong>Luxury Resort Spa:</strong> 14,000 sq ft spa featuring luxurious treatment suites,
                    custom furniture, and full-service product
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-teal-600">•</span>
                  <span>
                    <strong>Urban Day Spa:</strong> 2,500 sq ft spa combining contemporary design with holistic
                    wellness treatments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-teal-600">•</span>
                  <span>
                    <strong>Eco-Resort Spa:</strong> A 5,800 sq ft sustainable spa created alongside with full
                    natural surrounds
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex items-center justify-center rounded-full bg-gray-300 p-8 shadow-md"
                >
                  <span className="text-center font-semibold text-gray-600">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Form Section */}
      <FadeInSection delay={300}>
        <section className="py-16">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Ready to Build Your Dream Spa?
                </h2>
                <p className="text-lg text-gray-600">
                  Contact us today to receive free development assistance.
                </p>
              </div>

              <form className="space-y-6 rounded-xl bg-white p-8 shadow-xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Type of Project
                    </label>
                    <select className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20">
                      <option>Select...</option>
                      <option>Day Spa</option>
                      <option>Salon & Spa</option>
                      <option>Resort Spa</option>
                      <option>Medical Spa</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Size of Project
                    </label>
                    <select className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20">
                      <option>Select...</option>
                      <option>1-3 Treatment Rooms</option>
                      <option>4-6 Treatment Rooms</option>
                      <option>7+ Treatment Rooms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="px-12">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
