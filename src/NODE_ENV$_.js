import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {import('NODE_ENV$_').NODE_ENV$_} */
export const NODE_ENV$_ = be_('NODE_ENV$', ()=>atom$(process.env.NODE_ENV)
)
export { NODE_ENV$_ as b__NODE_ENV }
