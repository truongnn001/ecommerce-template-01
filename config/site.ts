// Site configuration
export const siteConfig = {
  name: 'Universal Companies',
  description: 'Leading supplier of spa and salon supplies, products, and equipment',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/universalcos',
    facebook: 'https://www.facebook.com/universalcompaniesinc',
    instagram: 'https://www.instagram.com/universalcos/',
    youtube: 'https://www.youtube.com/@UniversalCos',
    linkedin: 'https://www.linkedin.com/company/universal-companies',
    tiktok: 'https://www.tiktok.com/@universalcompanies',
    pinterest: 'https://www.pinterest.com/universalcos/',
  },
  contact: {
    email: 'info@universalcompanies.com',
    phone: '1-800-558-5571',
  },
};

// Shipping thresholds
export const shippingConfig = {
  freeShippingThreshold: 749,
  reducedShippingThreshold: 199,
  reducedShippingCost: 4.99,
  standardShippingCost: 9.99,
};

// Pagination defaults
export const paginationConfig = {
  defaultPageSize: 24,
  pageSizeOptions: [12, 24, 48, 96],
};
