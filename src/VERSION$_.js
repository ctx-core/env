import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('VERSION$_').VERSION$_} */
export const VERSION$_ = be_('VERSION$', ()=>
	atom_(
		typeof process === 'object' && (
			process.env.VERSION || process.env.HEROKU_SLUG_COMMIT
		)
		|| Math.random().toString())
)
