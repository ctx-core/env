import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { import_meta_env_ } from '../import_meta_env/index.js'
export const [
	VERSION$_,
	VERSION_,
	VERSION__set,
] = be_atom_triple_('VERSION', ()=>
	atom_(
		typeof process === 'object' && (
			import_meta_env_().VERSION || import_meta_env_().HEROKU_SLUG_COMMIT
		)
		|| Math.random().toString())
)
export { VERSION$_ as VERSION__ }
