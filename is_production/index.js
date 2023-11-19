import { be_computed_pair_ } from '@ctx-core/nanostores'
import { NODE_ENV_ } from '../NODE_ENV/index.js'
export const [
	is_production$_,
	is_production_,
] = be_computed_pair_(ctx=>
	NODE_ENV_(ctx) === 'prod'
	|| NODE_ENV_(ctx) === 'production')
	.config({ id: 'is_production' })
export {
	is_production$_ as is_production__,
	is_production$_ as b__is__production,
}
