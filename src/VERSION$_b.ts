import { B, be_ } from '@ctx-core/object'
import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
const key = 'VERSION$'
export const VERSION$_b:B<VERSION$_T> = be_(key, ()=>
	atom$(
		(typeof process === 'object' && (
			process.env.VERSION
			|| process.env.HEROKU_SLUG_COMMIT
		))
		|| Math.random().toString()
	) as VERSION$_T
)
export type VERSION$_T = WritableAtom$<string>
export {
	VERSION$_b as b__VERSION,
}
