import { be_ } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
const key = 'VERSION$'
/** @type {import('VERSION$_b').VERSION$_b} */
export const VERSION$_b = be_(key, ()=>atom$(typeof process === 'object' && (process.env.VERSION || process.env.HEROKU_SLUG_COMMIT) || Math.random().toString()))
export { VERSION$_b as b__VERSION, }
