import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    id: '1',
    title: 'Lash & Brow Tinting Training + Certificate',
    description: 'Earn 2 CEUs and learn how to integrate service offerings with business building strategies.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400',
    duration: '2 hours',
    ceus: '2 CEUs',
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'Advanced Skincare Techniques',
    description: 'Master advanced facial techniques and product knowledge for professional estheticians.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400',
    duration: '3 hours',
    ceus: '3 CEUs',
    level: 'Advanced',
  },
  {
    id: '3',
    title: 'Massage Therapy Fundamentals',
    description: 'Learn essential massage techniques and best practices for client care.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400',
    duration: '4 hours',
    ceus: '4 CEUs',
    level: 'Intermediate',
  },
];

const blogPosts = [
  {
    id: '1',
    title: 'Building a Lash & Brow Bar Clients Can\'t Resist',
    excerpt: 'Soft Clients will beat a path to your door for beautiful brows. Learn five great reasons to add lash and brow services to your menu.',
    image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=600&h=400',
    category: 'Lash & Brow',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'How Massage Therapists Can Reduce Burnout',
    excerpt: 'As a massage therapist, it\'s easy to become overwhelmed by the physical and emotional demands of the job. Discover how to prevent burnout.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400',
    category: 'Massage',
    readTime: '7 min read',
  },
];

export default function EducationResources() {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Educational Resources for Spa & Salon Professionals
          </h2>
          <p className="text-lg text-gray-600">
            Earn CEUs or take FREE courses to learn new skills! We created the UCo Learning Network 
            to offer you a growing library of online classes.
          </p>
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Featured Courses</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.id}
                href="/learning"
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center space-x-2 text-xs text-gray-600">
                    <span className="rounded-full bg-brand-purple-100 px-2 py-1 text-brand-purple-700">
                      {course.ceus}
                    </span>
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.level}</span>
                  </div>
                  <h4 className="mb-2 font-semibold text-gray-900 group-hover:text-brand-purple-600">
                    {course.title}
                  </h4>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <div className="mt-4 flex items-center text-brand-purple-600">
                    <span className="text-sm font-medium">Start Learning</span>
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/learning"
              className="inline-flex items-center rounded-md bg-brand-purple-600 px-8 py-3 text-white transition-colors hover:bg-brand-purple-700"
            >
              Browse All Courses
            </Link>
          </div>
        </div>

        {/* Learning Library / Blog */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Learning Library</h3>
          <p className="mb-8 text-gray-600">
            Browse a wide variety of blog topics in our learning area, from makeup to nails and beyond.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href="/blog"
                className="group flex overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative h-full w-1/3 flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6">
                  <div className="mb-2 flex items-center text-xs text-gray-600">
                    <span className="text-brand-purple-600">{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="mb-2 font-semibold text-gray-900 group-hover:text-brand-purple-600">
                    {post.title}
                  </h4>
                  <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
                  <span className="text-sm font-medium text-brand-purple-600">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
