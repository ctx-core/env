import { be_ } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
const key = 'CACHE_VERSION$'
/** @type {import('./CACHE_VERSION$_b').CACHE_VERSION$_b} */
export const CACHE_VERSION$_b = be_(key, ()=>
	atom$(typeof process === 'object' && process.env.CACHE_VERSION)
)
export { CACHE_VERSION$_b as b__CACHE_VERSION, }
