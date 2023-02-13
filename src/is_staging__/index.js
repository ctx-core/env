import { eql_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { NODE_ENV__ } from '../NODE_ENV__/index.js'
/** @type {typeof import('./index.d.ts').is_staging__} */
export const is_staging__ = be_('is_staging__', ctx=>
	computed_(NODE_ENV__(ctx),
		eql_([
			'staging'
		])))
export {
	is_staging__ as is_staging$_,
	is_staging__ as b__is__staging,
}
