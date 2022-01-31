import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { NODE_ENV$_ } from './NODE_ENV$_.js'
const key = 'is_development$'
/** @type {import('is_development$_').is_development$_} */
export const is_development$_ = be_(key, ctx=>
	computed$(NODE_ENV$_(ctx),
		(NODE_ENV)=>
			NODE_ENV === 'dev' || NODE_ENV === 'development.js'
	)
)
