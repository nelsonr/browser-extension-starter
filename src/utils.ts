import { Tab } from "./types.d";

// The browser APIs are namespaced: 
// Chromium browsers use the `chrome` namespace.
// Firefox uses the `browser` namespace.
export const env = chrome || browser;

/**
 * Tries to get the current active browser tab (if any).
 * It returns either a Tab object or a undefined result, wrapped in a Promise.
 *
 * @returns Tab information wrapped in a Promise
 */
export async function getCurrentTab (): Promise<Tab> {
    const queryOptions = {
        active: true,
        currentWindow: true,
    };

    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    const [ tab ] = await env.tabs.query(queryOptions);

    return tab;
}
