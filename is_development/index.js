import { be_computed_pair_ } from '@ctx-core/nanostores'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_development$_,
	is_development_,
] = be_computed_pair_(ctx=>
	NODE_ENV_(ctx) === 'dev'
	|| NODE_ENV_(ctx) === 'development')
	.config({ id: 'is_development' })
export { is_development$_ as is_development__ }
