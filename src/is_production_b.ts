import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { NODE_ENV_b } from './NODE_ENV_b'
import type { env_Ctx } from './env_Ctx'
const key = 'is_production'
export const is_production_b = _b<env_Ctx, typeof key>(key, ctx=>
	derived$(NODE_ENV_b(ctx), NODE_ENV=>
		NODE_ENV === 'prod' || NODE_ENV === 'production'
	) as is_production_T
)
export type $is_production_T = boolean
export interface is_production_T extends Readable$<$is_production_T> {}
export { is_production_b as b__is__production }
