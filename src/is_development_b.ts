import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { NODE_ENV_b } from './NODE_ENV_b'
export const is_development_b:is_development_b_type = _b('is_development', ctx=>
	derived(NODE_ENV_b(ctx),
		NODE_ENV=>
			NODE_ENV === 'dev' || NODE_ENV === 'development'
	) as is_development_type
)
export type $is_development_type = boolean
export interface is_development_type extends Readable<$is_development_type> {}
export interface is_development_b_type extends B<is_development_type> {}
export { is_development_b as b__is__development }
