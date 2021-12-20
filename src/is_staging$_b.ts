import { eql_ } from '@ctx-core/function'
import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { NODE_ENV$_b } from './NODE_ENV$_b.js'
const key = 'is_staging$'
export const is_staging$_b:B<is_staging$_T> = be_(key, ctx=>
	computed$(
		NODE_ENV$_b(ctx),
		eql_(['staging'])
	) as is_staging$_T
)
export type is_staging$_T = ReadableAtom$<boolean>
export { is_staging$_b as b__is__staging }
