const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 3;
const MAX_GLOBAL_PER_HOUR = 20;

const globalMap = new Map<string, { count: number; hour: number }>();

function getHour(): number {
  return Math.floor(Date.now() / 3600000);
}

export function rateLimit(ip: string): boolean {
  const now = Date.now();

  const global = globalMap.get(ip);
  const currentHour = getHour();
  if (global) {
    if (global.hour !== currentHour) {
      global.count = 0;
      global.hour = currentHour;
    }
    if (global.count >= MAX_GLOBAL_PER_HOUR) {
      return false;
    }
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    if (global) {
      global.count++;
    } else {
      globalMap.set(ip, { count: 1, hour: currentHour });
    }
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  if (global) {
    global.count++;
  } else {
    globalMap.set(ip, { count: 1, hour: currentHour });
  }
  return true;
}

setInterval(() => {
  const cutoff = Date.now() - WINDOW_MS;
  for (const [key, value] of rateLimitMap) {
    if (value.lastReset < cutoff) {
      rateLimitMap.delete(key);
    }
  }
}, 300000);
