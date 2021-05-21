import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
const key = 'CACHE_VERSION'
export interface CACHE_VERSION_ctx_I {
	CACHE_VERSION?:CACHE_VERSION_T
}
export const CACHE_VERSION_b = _b<CACHE_VERSION_ctx_I, typeof key>(key, ()=>
	writable(
		typeof process === 'object' && process.env.CACHE_VERSION
	) as CACHE_VERSION_T
)
export type $CACHE_VERSION_T = false|string
export interface CACHE_VERSION_T extends Writable<$CACHE_VERSION_T> {}
export { CACHE_VERSION_b as b__CACHE_VERSION }
