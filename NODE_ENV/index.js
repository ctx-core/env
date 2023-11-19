import { be_atom_triple_ } from '@ctx-core/nanostores'
import { import_meta_env_ } from '../import_meta_env/index.js'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const [
	NODE_ENV$_,
	NODE_ENV_,
	NODE_ENV__set,
] = /** @type {be_atom_triple_T<string>} */be_atom_triple_(()=>
	import_meta_env_().NODE_ENV)
	.config({ id: 'NODE_ENV' })
export {
	NODE_ENV$_ as NODE_ENV__,
	NODE_ENV$_ as b__NODE_ENV,
}
