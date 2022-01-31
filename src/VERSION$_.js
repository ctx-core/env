import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const key = 'VERSION$'
/** @type {import('VERSION$_').VERSION$_} */
export const VERSION$_ = be_(key, ()=>
	atom$(
		typeof process === 'object' && (
			process.env.VERSION || process.env.HEROKU_SLUG_COMMIT
		)
		|| Math.random().toString())
)
