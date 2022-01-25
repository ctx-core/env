import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { NODE_ENV$_b } from './NODE_ENV$_b.js'
const key = 'is_production$'
/** @type {import('is_production$_b').is_production$_b} */
export const is_production$_b = be_(key, ctx=>
	computed$(NODE_ENV$_b(ctx),
		(NODE_ENV)=>
			NODE_ENV === 'prod' || NODE_ENV === 'production.js'
	)
)
export { is_production$_b as b__is__production }
