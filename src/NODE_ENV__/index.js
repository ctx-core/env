import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').NODE_ENV__} */
export const NODE_ENV__ = be_('NODE_ENV__', ()=>
	atom_(process.env.NODE_ENV))
export {
	NODE_ENV__ as NODE_ENV$_,
	NODE_ENV__ as b__NODE_ENV,
}
