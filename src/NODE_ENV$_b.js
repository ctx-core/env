import { be_ } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
const key = 'NODE_ENV$'
/** @type {import('NODE_ENV$_b').NODE_ENV$_b} */
export const NODE_ENV$_b = be_(key, ()=>atom$(process.env.NODE_ENV)
)
export { NODE_ENV$_b as b__NODE_ENV }
