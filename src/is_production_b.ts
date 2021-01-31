import { _b, B } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { NODE_ENV_b } from './NODE_ENV_b'
export const is_production_b:is_production_b_type = _b('is_production', ctx=>
	derived(NODE_ENV_b(ctx), NODE_ENV=>
		NODE_ENV === 'prod' || NODE_ENV === 'production'
	) as is_production_type
)
export type $is_production_type = boolean
export interface is_production_type extends Readable<$is_production_type> {}
export interface is_production_b_type extends B<is_production_type> {}
export { is_production_b as b__is__production }
