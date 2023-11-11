import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { import_meta_env_ } from '../import_meta_env/index.js'
export const [
	NODE_ENV$_,
	NODE_ENV_,
	NODE_ENV__set,
] = be_atom_triple_('NODE_ENV', ()=>
	atom_(import_meta_env_().NODE_ENV))
export {
	NODE_ENV$_ as NODE_ENV__,
	NODE_ENV$_ as b__NODE_ENV,
}
