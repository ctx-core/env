import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('./CACHE_VERSION$_').CACHE_VERSION$_} */
export const CACHE_VERSION$_ = be_('CACHE_VERSION$', ()=>
	atom_(typeof process === 'object' && process.env.CACHE_VERSION)
)
export { CACHE_VERSION$_ as b__CACHE_VERSION, }
