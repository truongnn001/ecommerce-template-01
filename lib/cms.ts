/**
 * CMS Client
 * Handles all communication with the CMS backend
 */

import {
  CMSProduct,
  CMSCategory,
  CMSBrand,
  CMSReview,
  CMSMenuItem,
  CMSPage,
  CMSBlogPost,
  CMSListResponse,
  CMSSingleResponse,
  CMSQueryParams,
  CMSError,
} from '@/lib/types/cms';

// Base URL from environment variable
const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL || '';
const CMS_API_TOKEN = process.env.CMS_API_TOKEN || '';

// Check if CMS is configured
const isCMSConfigured = () => {
  return Boolean(CMS_BASE_URL);
};

/**
 * Generic fetch function for CMS
 */
export async function cmsFetch<T>(
  path: string,
  options?: RequestInit & { params?: CMSQueryParams }
): Promise<T> {
  // If CMS not configured, return mock data
  if (!isCMSConfigured()) {
    console.warn(`CMS not configured. Using mock data for: ${path}`);
    return getMockData<T>(path);
  }

  const { params, ...fetchOptions } = options || {};
  
  // Build URL with query parameters
  const url = new URL(path, CMS_BASE_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) => url.searchParams.append(key, String(v)));
        } else if (typeof value === 'object') {
          url.searchParams.append(key, JSON.stringify(value));
        } else {
          url.searchParams.append(key, String(value));
        }
      }
    });
  }

  try {
    const response = await fetch(url.toString(), {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...(CMS_API_TOKEN && { Authorization: `Bearer ${CMS_API_TOKEN}` }),
        ...fetchOptions?.headers,
      },
      // Enable caching for GET requests
      next: fetchOptions?.next || { revalidate: 3600 }, // 1 hour default
    });

    if (!response.ok) {
      const error: CMSError = await response.json().catch(() => ({
        status: response.status,
        name: 'CMSError',
        message: response.statusText,
      }));
      throw new Error(`CMS Error: ${error.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('CMS Fetch Error:', error);
    // Fallback to mock data on error
    return getMockData<T>(path);
  }
}

/**
 * Product API
 */
export async function getProducts(params?: CMSQueryParams): Promise<CMSProduct[]> {
  const response = await cmsFetch<CMSListResponse<CMSProduct>>('/api/products', { params });
  return response.data || [];
}

export async function getProductBySlug(slug: string): Promise<CMSProduct | null> {
  try {
    const response = await cmsFetch<CMSSingleResponse<CMSProduct>>(`/api/products/${slug}`);
    return response.data || null;
  } catch {
    return null;
  }
}

export async function getProductsByCategory(
  categorySlug: string,
  params?: CMSQueryParams
): Promise<CMSProduct[]> {
  const response = await cmsFetch<CMSListResponse<CMSProduct>>('/api/products', {
    params: {
      ...params,
      filters: { category: { slug: { $eq: categorySlug } } },
    },
  });
  return response.data || [];
}

export async function getProductsByBrand(
  brandSlug: string,
  params?: CMSQueryParams
): Promise<CMSProduct[]> {
  const response = await cmsFetch<CMSListResponse<CMSProduct>>('/api/products', {
    params: {
      ...params,
      filters: { brand: { slug: { $eq: brandSlug } } },
    },
  });
  return response.data || [];
}

export async function searchProducts(query: string, params?: CMSQueryParams): Promise<CMSProduct[]> {
  const response = await cmsFetch<CMSListResponse<CMSProduct>>('/api/products', {
    params: {
      ...params,
      filters: {
        $or: [
          { name: { $containsi: query } },
          { description: { $containsi: query } },
          { tags: { $containsi: query } },
        ],
      },
    },
  });
  return response.data || [];
}

/**
 * Category API
 */
export async function getCategories(params?: CMSQueryParams): Promise<CMSCategory[]> {
  const response = await cmsFetch<CMSListResponse<CMSCategory>>('/api/categories', { params });
  return response.data || [];
}

export async function getCategoryBySlug(slug: string): Promise<CMSCategory | null> {
  try {
    const response = await cmsFetch<CMSSingleResponse<CMSCategory>>(`/api/categories/${slug}`);
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * Brand API
 */
export async function getBrands(params?: CMSQueryParams): Promise<CMSBrand[]> {
  const response = await cmsFetch<CMSListResponse<CMSBrand>>('/api/brands', { params });
  return response.data || [];
}

export async function getBrandBySlug(slug: string): Promise<CMSBrand | null> {
  try {
    const response = await cmsFetch<CMSSingleResponse<CMSBrand>>(`/api/brands/${slug}`);
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * Review API
 */
export async function getProductReviews(productId: string): Promise<CMSReview[]> {
  const response = await cmsFetch<CMSListResponse<CMSReview>>('/api/reviews', {
    params: {
      filters: { productId: { $eq: productId } },
      sort: 'createdAt:desc',
    },
  });
  return response.data || [];
}

/**
 * Menu API
 */
export async function getMenuItems(menuId?: string): Promise<CMSMenuItem[]> {
  const response = await cmsFetch<CMSListResponse<CMSMenuItem>>('/api/menu-items', {
    params: {
      ...(menuId && { filters: { menu: { $eq: menuId } } }),
      sort: 'order:asc',
    },
  });
  return response.data || [];
}

/**
 * Page API
 */
export async function getPageBySlug(slug: string): Promise<CMSPage | null> {
  try {
    const response = await cmsFetch<CMSSingleResponse<CMSPage>>(`/api/pages/${slug}`);
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * Blog API
 */
export async function getBlogPosts(params?: CMSQueryParams): Promise<CMSBlogPost[]> {
  const response = await cmsFetch<CMSListResponse<CMSBlogPost>>('/api/blog-posts', { params });
  return response.data || [];
}

export async function getBlogPostBySlug(slug: string): Promise<CMSBlogPost | null> {
  try {
    const response = await cmsFetch<CMSSingleResponse<CMSBlogPost>>(`/api/blog-posts/${slug}`);
    return response.data || null;
  } catch {
    return null;
  }
}

/**
 * Mock Data Fallback
 * Returns mock data when CMS is not configured or unavailable
 */
function getMockData<T>(path: string): T {
  console.log(`Returning mock data for: ${path}`);
  
  // Return empty array for list endpoints
  if (path.includes('/api/')) {
    return { data: [], meta: { page: 1, pageSize: 10, pageCount: 0, total: 0 } } as T;
  }
  
  // Return null for single item endpoints
  return null as T;
}

/**
 * Utility: Check CMS connection
 */
export async function checkCMSConnection(): Promise<boolean> {
  if (!isCMSConfigured()) {
    return false;
  }

  try {
    await cmsFetch('/api/health');
    return true;
  } catch {
    return false;
  }
}

/**
 * Export utility to check if CMS is configured
 */
export { isCMSConfigured };
