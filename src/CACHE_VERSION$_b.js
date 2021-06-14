import { be_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'CACHE_VERSION$';
export const CACHE_VERSION$_b = be_(key, () => writable$(typeof process === 'object' && process.env.CACHE_VERSION));
export { CACHE_VERSION$_b as b__CACHE_VERSION, };
//# sourceMappingURL=src/CACHE_VERSION$_b.js.map