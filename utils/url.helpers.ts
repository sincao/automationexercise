/**
 * URL builder utilities — keeps URL construction centralised and testable.
 */

export function buildUrl(base: string, path: string, params?: Record<string, string | number>): string {
  const url = new URL(path, base);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }
  return url.toString();
}

export function appendQueryParams(url: string, params: Record<string, string | number>): string {
  const urlObj = new URL(url);
  Object.entries(params).forEach(([key, value]) => {
    urlObj.searchParams.set(key, String(value));
  });
  return urlObj.toString();
}

/**
 * Extract a query parameter from a URL string.
 */
export function getQueryParam(url: string, param: string): string | null {
  try {
    return new URL(url).searchParams.get(param);
  } catch {
    return null;
  }
}
