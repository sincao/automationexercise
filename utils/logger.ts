import * as winston from 'winston';
import * as path from 'path';
import * as fs from 'fs';

const LOG_DIR = path.resolve(process.cwd(), 'reports/logs');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const { combine, timestamp, printf, colorize, errors } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${stack ?? message}`;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL ?? 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    logFormat,
  ),
  transports: [
    // Console output
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }),
        timestamp({ format: 'HH:mm:ss' }),
        logFormat,
      ),
    }),
    // File: all logs
    new winston.transports.File({
      filename: path.join(LOG_DIR, 'test-run.log'),
      maxsize: 5 * 1024 * 1024, // 5MB
      maxFiles: 5,
      tailable: true,
    }),
    // File: errors only
    new winston.transports.File({
      filename: path.join(LOG_DIR, 'errors.log'),
      level: 'error',
      maxsize: 5 * 1024 * 1024,
      maxFiles: 3,
    }),
  ],
});

/**
 * Step-level logger for test steps — prefixes with [STEP] for easy grepping
 */
export function logStep(step: string): void {
  logger.info(`[STEP] ${step}`);
}

/**
 * Log API request details
 */
export function logApiRequest(method: string, url: string, body?: unknown): void {
  logger.debug(`[API REQUEST] ${method.toUpperCase()} ${url}${body ? ` | Body: ${JSON.stringify(body)}` : ''}`);
}

/**
 * Log API response details
 */
export function logApiResponse(status: number, url: string, duration?: number): void {
  const durationStr = duration ? ` (${duration}ms)` : '';
  logger.debug(`[API RESPONSE] ${status} ${url}${durationStr}`);
}
