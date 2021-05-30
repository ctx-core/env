import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { env_Ctx } from './env_Ctx'
const key = 'CACHE_VERSION$'
export const CACHE_VERSION$_b = _b<env_Ctx, typeof key>(key, ()=>
	writable$(
		typeof process === 'object' && process.env.CACHE_VERSION
	) as CACHE_VERSION$_T
)
export type CACHE_VERSION_T = false|string
export interface CACHE_VERSION$_T extends Writable$<CACHE_VERSION_T> {}
export {
	CACHE_VERSION$_b as b__CACHE_VERSION,
}
