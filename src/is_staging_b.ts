import { _b } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
import { derived$, Readable$ } from '@ctx-core/store'
import { NODE_ENV_b, NODE_ENV_Ctx } from './NODE_ENV_b'
const key = 'is_staging'
export interface is_staging_Ctx extends NODE_ENV_Ctx {
	is_staging?:is_staging_T
}
export const is_staging_b = _b<is_staging_Ctx, typeof key>(key, ctx=>
	derived$(
		NODE_ENV_b(ctx), _eql('staging')
	) as is_staging_T
)
export type $is_staging_T = boolean
export interface is_staging_T extends Readable$<$is_staging_T> {}
export { is_staging_b as b__is__staging }
