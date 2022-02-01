import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { NODE_ENV$_ } from './NODE_ENV$_.js'
/** @type {import('is_production$_').is_production$_} */
export const is_production$_ = be_('is_production$', ctx=>
	computed$(NODE_ENV$_(ctx),
		(NODE_ENV)=>
			NODE_ENV === 'prod' || NODE_ENV === 'production.js'
	)
)
export { is_production$_ as b__is__production }
