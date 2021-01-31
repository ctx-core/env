import { _b, B } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { NODE_ENV_b } from './NODE_ENV_b'
export const is_staging_b: is_staging_b_type = _b('is_staging', ctx=>
	derived(
		NODE_ENV_b(ctx), _eql('staging')
	) as is_staging_type
)
export type $is_staging_type = boolean
export interface is_staging_type extends Readable<$is_staging_type> {}
export interface is_staging_b_type extends B<is_staging_type> {}
export { is_staging_b as b__is__staging }
