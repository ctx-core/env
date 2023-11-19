import { be_atom_triple_ } from '@ctx-core/nanostores'
import { import_meta_env_ } from '../import_meta_env/index.js'
/** @typedef {import('@ctx-core/nanostores').be_atom_triple_T} */
export const [
	VERSION$_,
	VERSION_,
	VERSION__set,
] = /** @type {be_atom_triple_T<string>} */be_atom_triple_(()=>
	typeof process === 'object' && (
		import_meta_env_().VERSION || import_meta_env_().HEROKU_SLUG_COMMIT
	)
	|| Math.random().toString())
	.config({ id: 'VERSION' })
export { VERSION$_ as VERSION__ }
