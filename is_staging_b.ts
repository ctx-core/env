import { _b } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived } from '@ctx-core/store'
import { NODE_ENV_b } from './NODE_ENV_b'
export const is_staging_b = _b('is_staging', ctx=>
	derived(
		NODE_ENV_b(ctx),
		_eql('staging')))
export { is_staging_b as b__is__staging }
