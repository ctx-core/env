import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { NODE_ENV$_b } from './NODE_ENV$_b';
const key = 'is_production$';
export const is_production$_b = be_(key, ctx => derived$(NODE_ENV$_b(ctx), NODE_ENV => NODE_ENV === 'prod' || NODE_ENV === 'production'));
export { is_production$_b as b__is__production };
//# sourceMappingURL=src/is_production$_b.js.map