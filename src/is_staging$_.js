import { eql_ } from '@ctx-core/function'
import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { NODE_ENV$_ } from './NODE_ENV$_.js'
/** @type {import('is_staging$_').is_staging$_} */
export const is_staging$_ = be_('is_staging$', ctx=>
	computed$(NODE_ENV$_(ctx),
		eql_([
			'staging'
		]))
)
export { is_staging$_ as b__is__staging }
