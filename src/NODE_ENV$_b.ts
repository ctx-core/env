import { B, be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'NODE_ENV$'
export const NODE_ENV$_b:B<NODE_ENV$_T> = be_(key, ()=>
	writable$(process.env.NODE_ENV) as NODE_ENV$_T
)
export type NODE_ENV_T = string
export interface NODE_ENV$_T extends Writable$<NODE_ENV_T> {}
export { NODE_ENV$_b as b__NODE_ENV }
