import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { env_Ctx } from './env_Ctx'
const key = 'VERSION$'
export const VERSION$_b:B<env_Ctx, typeof key> = be_(key, ()=>
	writable$(
		(typeof process === 'object' && (
			process.env.VERSION
			|| process.env.HEROKU_SLUG_COMMIT
		))
		|| Math.random().toString()
	) as VERSION$_T
)
export type VERSION_T = string
export interface VERSION$_T extends Writable$<VERSION_T> {}
export {
	VERSION$_b as b__VERSION,
}
