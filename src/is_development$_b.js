import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { NODE_ENV$_b } from './NODE_ENV$_b';
const key = 'is_development$';
export const is_development$_b = be_(key, ctx => derived$(NODE_ENV$_b(ctx), NODE_ENV => NODE_ENV === 'dev' || NODE_ENV === 'development'));
export { is_development$_b as b__is__development };
//# sourceMappingURL=src/is_development$_b.js.map