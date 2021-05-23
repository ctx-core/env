import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { env_Ctx } from './env_Ctx'
const key = 'VERSION'
export const VERSION_b = _b<env_Ctx, typeof key>(key, ()=>
	writable$(
		(typeof process === 'object' && (
			process.env.VERSION
			|| process.env.HEROKU_SLUG_COMMIT
		))
		|| Math.random().toString()
	) as VERSION_T
)
export { VERSION_b as b__VERSION }
export type $VERSION_T = string
export interface VERSION_T extends Writable$<$VERSION_T> {}
