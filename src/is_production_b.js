import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { NODE_ENV_b } from './NODE_ENV_b';
const key = 'is_production';
export const is_production_b = _b(key, ctx => derived$(NODE_ENV_b(ctx), NODE_ENV => NODE_ENV === 'prod' || NODE_ENV === 'production'));
export { is_production_b as b__is__production };
