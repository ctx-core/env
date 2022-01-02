import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { NODE_ENV$_b } from './NODE_ENV$_b.js'
const key = 'is_development$'
/** @type {import('is_development$_b').is_development$_b} */
export const is_development$_b = be_(key, (ctx)=>
	computed$(NODE_ENV$_b(ctx),
		(NODE_ENV)=>
			NODE_ENV === 'dev' || NODE_ENV === 'development.js'
	)
)
export { is_development$_b as b__is__development }
