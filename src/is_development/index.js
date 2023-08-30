import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_development$_,
	is_development_,
] = val__be_computed_pair_('is_development', ctx=>
	NODE_ENV_(ctx) === 'dev'
	|| NODE_ENV_(ctx) === 'development')
export { is_development$_ as is_development__ }
