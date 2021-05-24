import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { NODE_ENV_b } from './NODE_ENV_b';
const key = 'is_development';
export const is_development_b = _b(key, ctx => derived$(NODE_ENV_b(ctx), NODE_ENV => NODE_ENV === 'dev' || NODE_ENV === 'development'));
export { is_development_b as b__is__development };
