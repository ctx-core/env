import { _b, B } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const VERSION_b: VERSION_b_type = _b('VERSION', ()=>
	writable(
		(typeof process === 'object' && (
			process.env.VERSION
			|| process.env.HEROKU_SLUG_COMMIT
		))
		|| Math.random()
	) as VERSION_type
)
export { VERSION_b as b__VERSION }
export type $VERSION_type = string|number
export interface VERSION_type extends Writable<$VERSION_type> {}
export interface VERSION_b_type extends B<VERSION_type> {}
