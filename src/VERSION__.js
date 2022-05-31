import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('VERSION__').VERSION__} */
export const VERSION__ = be_('VERSION__', ()=>
	atom_(
		typeof process === 'object' && (
			process.env.VERSION || process.env.HEROKU_SLUG_COMMIT
		)
		|| Math.random().toString())
)
export { VERSION__ as VERSION$_ }
