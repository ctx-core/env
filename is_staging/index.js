import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_staging$_,
	is_staging_,
] = val__be_computed_pair_('is_staging', ctx=>
	NODE_ENV_(ctx) === 'staging')
export {
	is_staging$_ as is_staging__,
	is_staging$_ as b__is__staging,
}
