import { _b, B } from '@ctx-core/object'
import { writable, Writable } from '@ctx-core/store'
export const NODE_ENV_b:NODE_ENV_b_type = _b('NODE_ENV', ()=>
	writable(process.env.NODE_ENV) as NODE_ENV_type
)
export type $NODE_ENV_type = string
export interface NODE_ENV_type extends Writable<$NODE_ENV_type> {}
export interface NODE_ENV_b_type extends B<NODE_ENV_type> {}
export { NODE_ENV_b as b__NODE_ENV }
