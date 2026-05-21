/**
 * General-purpose utility helpers.
 */

/**
 * Pause execution. Use sparingly — prefer DOM/network waits.
 * Acceptable use: waiting for animation, third-party widget init.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format a date for display in UI inputs (MM/DD/YYYY).
 */
export function formatDateForInput(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
}

/**
 * Format ISO date string for API payloads.
 */
export function formatISODate(date: Date = new Date()): string {
  return date.toISOString();
}

/**
 * Add days to a date.
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Strip whitespace and normalise a string for comparison.
 */
export function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim().toLowerCase();
}

/**
 * Convert price string like "$1,234.56" to number.
 */
export function parsePrice(priceStr: string): number {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
}

/**
 * Mask sensitive values for logging.
 */
export function maskSensitive(value: string, visibleChars = 4): string {
  if (value.length <= visibleChars) return '****';
  return value.slice(0, visibleChars) + '*'.repeat(value.length - visibleChars);
}

/**
 * Deep clone an object (safe for plain objects).
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Retry a sync or async function.
 */
export async function retry<T>(
  fn: () => T | Promise<T>,
  attempts = 3,
  delay = 300,
): Promise<T> {
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts) throw err;
      await sleep(delay * i);
    }
  }
  throw new Error('retry exhausted'); // unreachable
}
