import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'VERSION'
export interface VERSION_ctx_I {
	VERSION?:VERSION_T
}
export const VERSION_b = _b<VERSION_ctx_I, typeof key>(key, ()=>
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
