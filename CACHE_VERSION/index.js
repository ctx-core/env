import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { import_meta_env_ } from '../import_meta_env/index.js'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const [
	CACHE_VERSION$_,
	CACHE_VERSION_,
	CACHE_VERSION__set,
] = /** @type {be_atom_triple_T<false|string>} */ be_atom_triple_(()=>
	typeof process === 'object' && import_meta_env_().CACHE_VERSION,
{ id: 'CACHE_VERSION' })
export {
	CACHE_VERSION$_ as CACHE_VERSION__,
	CACHE_VERSION$_ as b__CACHE_VERSION,
}
