// API endpoint constants
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    VERIFY_EMAIL: '/auth/verify-email',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    ME: '/auth/me',
  },

  // Products
  PRODUCTS: {
    LIST: '/products',
    DETAIL: (slug: string) => `/products/${slug}`,
    SEARCH: '/products/search',
    FEATURED: '/products/featured',
    BEST_SELLERS: '/products/best-sellers',
    NEW_ARRIVALS: '/products/new-arrivals',
    RELATED: (productId: string) => `/products/${productId}/related`,
    REVIEWS: (productId: string) => `/products/${productId}/reviews`,
  },

  // Categories
  CATEGORIES: {
    LIST: '/categories',
    DETAIL: (slug: string) => `/categories/${slug}`,
    TREE: '/categories/tree',
    PRODUCTS: (slug: string) => `/categories/${slug}/products`,
  },

  // Brands
  BRANDS: {
    LIST: '/brands',
    DETAIL: (slug: string) => `/brands/${slug}`,
    PRODUCTS: (slug: string) => `/brands/${slug}/products`,
  },

  // Cart
  CART: {
    GET: '/cart',
    ADD: '/cart/add',
    UPDATE: '/cart/update',
    REMOVE: '/cart/remove',
    CLEAR: '/cart/clear',
    APPLY_PROMO: '/cart/promo',
  },

  // Orders
  ORDERS: {
    LIST: '/orders',
    DETAIL: (orderId: string) => `/orders/${orderId}`,
    CREATE: '/orders',
    CANCEL: (orderId: string) => `/orders/${orderId}/cancel`,
  },

  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    ADDRESSES: '/user/addresses',
    ADD_ADDRESS: '/user/addresses',
    UPDATE_ADDRESS: (addressId: string) => `/user/addresses/${addressId}`,
    DELETE_ADDRESS: (addressId: string) => `/user/addresses/${addressId}`,
    WISHLIST: '/user/wishlist',
    ADD_TO_WISHLIST: '/user/wishlist/add',
    REMOVE_FROM_WISHLIST: '/user/wishlist/remove',
  },

  // Search
  SEARCH: {
    PRODUCTS: '/search/products',
    SUGGESTIONS: '/search/suggestions',
  },

  // Newsletter
  NEWSLETTER: {
    SUBSCRIBE: '/newsletter/subscribe',
  },
} as const;
