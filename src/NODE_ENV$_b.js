import { be_ } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'NODE_ENV$';
export const NODE_ENV$_b = be_(key, () => writable$(process.env.NODE_ENV));
export { NODE_ENV$_b as b__NODE_ENV };
//# sourceMappingURL=src/NODE_ENV$_b.js.map