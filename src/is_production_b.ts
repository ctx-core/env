import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { NODE_ENV_b, NODE_ENV_Ctx } from './NODE_ENV_b'
const key = 'is_production'
export interface is_production_Ctx extends NODE_ENV_Ctx {
	is_production?:is_production_T
}
export const is_production_b = _b<is_production_Ctx, typeof key>(key, ctx=>
	derived$(NODE_ENV_b(ctx), NODE_ENV=>
		NODE_ENV === 'prod' || NODE_ENV === 'production'
	) as is_production_T
)
export type $is_production_T = boolean
export interface is_production_T extends Readable$<$is_production_T> {}
export { is_production_b as b__is__production }
