import { B, be_ } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'NODE_ENV$'
export const NODE_ENV$_b:B<NODE_ENV$_T> = be_(key, ()=>
	atom$(process.env.NODE_ENV) as NODE_ENV$_T
)
export type NODE_ENV$_T = WritableAtom$<string>
export { NODE_ENV$_b as b__NODE_ENV }
