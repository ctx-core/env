import { be_ } from '@ctx-core/object';
import { eql_ } from '@ctx-core/function';
import { derived$ } from '@ctx-core/store';
import { NODE_ENV$_b } from './NODE_ENV$_b';
const key = 'is_staging$';
export const is_staging$_b = be_(key, ctx => derived$(NODE_ENV$_b(ctx), eql_(['staging'])));
export { is_staging$_b as b__is__staging };
//# sourceMappingURL=src/is_staging$_b.js.map