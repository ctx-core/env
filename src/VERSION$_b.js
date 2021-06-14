import { be_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'VERSION$';
export const VERSION$_b = be_(key, () => writable$((typeof process === 'object' && (process.env.VERSION
    || process.env.HEROKU_SLUG_COMMIT))
    || Math.random().toString()));
export { VERSION$_b as b__VERSION, };
//# sourceMappingURL=src/VERSION$_b.js.map