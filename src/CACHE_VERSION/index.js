import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { import_meta_env_ } from '../import_meta_env/index.js'
export const [
	CACHE_VERSION$_,
	CACHE_VERSION_,
	CACHE_VERSION__set,
] = be_atom_triple_('CACHE_VERSION', ()=>
	atom_(typeof process === 'object' && import_meta_env_().CACHE_VERSION))
export {
	CACHE_VERSION$_ as CACHE_VERSION__,
	CACHE_VERSION$_ as b__CACHE_VERSION,
}
