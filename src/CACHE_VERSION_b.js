import { _b } from '@ctx-core/object';
import { writable } from '@ctx-core/store';
const key = 'CACHE_VERSION';
export const CACHE_VERSION_b = _b(key, () => writable(typeof process === 'object' && process.env.CACHE_VERSION));
export { CACHE_VERSION_b as b__CACHE_VERSION };
