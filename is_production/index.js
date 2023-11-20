import { be_computed_pair_ } from '@ctx-core/nanostores'
import { NODE_ENV$_ } from '../NODE_ENV/index.js'
export const [
	is_production$_,
	is_production_,
] = be_computed_pair_(ctx=>NODE_ENV$_(ctx),
	NODE_ENV=>NODE_ENV === 'prod' || NODE_ENV === 'production',
	{ id: 'is_production' })
export {
	is_production$_ as is_production__,
	is_production$_ as b__is__production,
}
