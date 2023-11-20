import { be_computed_pair_ } from '@ctx-core/nanostores'
import { NODE_ENV$_ } from '../NODE_ENV/index.js'
export const [
	is_development$_,
	is_development_,
] = be_computed_pair_(ctx=>NODE_ENV$_(ctx),
	NODE_ENV=>NODE_ENV === 'dev' || NODE_ENV === 'development',
	{ id: 'is_development' })
export { is_development$_ as is_development__ }
