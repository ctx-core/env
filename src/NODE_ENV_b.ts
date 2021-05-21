import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'NODE_ENV'
export interface NODE_ENV_Ctx {
	NODE_ENV?:NODE_ENV_T
}
export const NODE_ENV_b = _b<NODE_ENV_Ctx, typeof key>(key, ()=>
	writable$(process.env.NODE_ENV) as NODE_ENV_T
)
export type $NODE_ENV_T = string
export interface NODE_ENV_T extends Writable$<$NODE_ENV_T> {}
export { NODE_ENV_b as b__NODE_ENV }
