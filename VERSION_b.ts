import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const VERSION_b = _b<VERSION_type>('VERSION', ()=>
	writable(
		(typeof process === 'object' && (
			process.env.VERSION
			|| process.env.HEROKU_SLUG_COMMIT
		))
		|| Math.random()))
export { VERSION_b as b__VERSION }
export type $VERSION_type = string|number
export type VERSION_type = Writable<$VERSION_type>
