import { eql_ } from '@ctx-core/function'
import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { NODE_ENV$_b } from './NODE_ENV$_b.js'
const key = 'is_staging$'
/** @type {import('is_staging$_b').is_staging$_b} */
export const is_staging$_b = be_(key, (ctx)=>
	computed$(NODE_ENV$_b(ctx),
		eql_([
			'staging'
		]))
)
export { is_staging$_b as b__is__staging }
