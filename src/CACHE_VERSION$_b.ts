import { B, be_ } from '@ctx-core/object'
import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
const key = 'CACHE_VERSION$'
export const CACHE_VERSION$_b:B<CACHE_VERSION$_T> = be_(key, ()=>
	atom$(
		typeof process === 'object' && process.env.CACHE_VERSION
	) as CACHE_VERSION$_T
)
export type CACHE_VERSION$_T = WritableAtom$<false|string>
export {
	CACHE_VERSION$_b as b__CACHE_VERSION,
}
