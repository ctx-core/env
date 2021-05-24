import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'NODE_ENV';
export const NODE_ENV_b = _b(key, () => writable$(process.env.NODE_ENV));
export { NODE_ENV_b as b__NODE_ENV };
