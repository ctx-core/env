import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'VERSION';
export const VERSION_b = _b(key, () => writable$((typeof process === 'object' && (process.env.VERSION
    || process.env.HEROKU_SLUG_COMMIT))
    || Math.random().toString()));
export { VERSION_b as b__VERSION };
