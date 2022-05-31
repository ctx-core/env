import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { NODE_ENV__ } from './NODE_ENV__.js'
/** @type {import('is_production__').is_production__} */
export const is_production__ = be_('is_production__', ctx=>
	computed_(NODE_ENV__(ctx),
		(NODE_ENV)=>
			NODE_ENV === 'prod' || NODE_ENV === 'production'
	)
)
export {
	is_production__ as is_production$_,
	is_production__ as b__is__production,
}
