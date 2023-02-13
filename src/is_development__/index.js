import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { NODE_ENV__ } from '../NODE_ENV__/index.js'
/** @type {typeof import('./index.d.ts').is_development__} */
export const is_development__ = be_('is_development__', ctx=>
	computed_(NODE_ENV__(ctx),
		(NODE_ENV)=>
			NODE_ENV === 'dev' || NODE_ENV === 'development'))
export { is_development__ as is_development$_ }
