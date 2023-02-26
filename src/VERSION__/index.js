import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { import_meta_env_ } from '../import_meta_env/index.js'
/** @type {typeof import('./index.d.ts').VERSION__} */
export const VERSION__ = be_('VERSION__', ()=>
	atom_(
		typeof process === 'object' && (
			import_meta_env_().VERSION || import_meta_env_().HEROKU_SLUG_COMMIT
		)
		|| Math.random().toString())
)
export { VERSION__ as VERSION$_ }
