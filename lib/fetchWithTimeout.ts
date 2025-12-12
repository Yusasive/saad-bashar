/**
 * Fetch utility with timeout and retry logic
 * Prevents hanging requests that can cause Vercel deployment issues
 */

interface FetchOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export async function fetchWithTimeout(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const {
    timeout = 10000, // 10 seconds default timeout
    retries = 3,
    retryDelay = 1000,
    ...fetchOptions
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    } catch (error) {
      lastError = error as Error;

      // Don't retry on abort (timeout) or if it's the last attempt
      if (
        (error as Error).name === "AbortError" ||
        attempt === retries
      ) {
        break;
      }

      // Wait before retrying (exponential backoff)
      await new Promise((resolve) =>
        setTimeout(resolve, retryDelay * Math.pow(2, attempt))
      );
    }
  }

  throw lastError || new Error("Failed to fetch");
}

