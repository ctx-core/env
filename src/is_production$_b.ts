import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { NODE_ENV$_b } from './NODE_ENV$_b.js'
const key = 'is_production$'
export const is_production$_b:B<is_production$_T> = be_(key, ctx=>
	computed$(NODE_ENV$_b(ctx), NODE_ENV=>
		NODE_ENV === 'prod' || NODE_ENV === 'production.js'
	) as is_production$_T
)
export type is_production$_T = ReadableAtom$<boolean>
export { is_production$_b as b__is__production }
