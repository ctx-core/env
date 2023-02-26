import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { import_meta_env_ } from '../import_meta_env/index.js'
/** @type {typeof import('./index.d.ts').CACHE_VERSION__} */
export const CACHE_VERSION__ = be_('CACHE_VERSION__', ()=>
	atom_(typeof process === 'object' && import_meta_env_().CACHE_VERSION))
export {
	CACHE_VERSION__ as CACHE_VERSION$_,
	CACHE_VERSION__ as b__CACHE_VERSION,
}
