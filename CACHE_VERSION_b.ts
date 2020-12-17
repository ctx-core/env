import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const CACHE_VERSION_b = _b('CACHE_VERSION', ()=>
	writable(
		typeof process === 'object' && process.env.CACHE_VERSION
	) as CACHE_VERSION_type
)
export { CACHE_VERSION_b as b__CACHE_VERSION }
export type $CACHE_VERSION_type = false|string
export interface CACHE_VERSION_type extends Writable<$CACHE_VERSION_type> {}
