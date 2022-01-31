import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'CACHE_VERSION$'
/** @type {import('./CACHE_VERSION$_').CACHE_VERSION$_} */
export const CACHE_VERSION$_ = be_(key, ()=>
	atom$(typeof process === 'object' && process.env.CACHE_VERSION)
)
export { CACHE_VERSION$_ as b__CACHE_VERSION, }
