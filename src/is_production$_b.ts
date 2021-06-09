import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { NODE_ENV$_b } from './NODE_ENV$_b'
import type { env_Ctx } from './env_Ctx'
const key = 'is_production$'
export const is_production$_b:B<env_Ctx, typeof key> = be_(key, ctx=>
	derived$(NODE_ENV$_b(ctx), NODE_ENV=>
		NODE_ENV === 'prod' || NODE_ENV === 'production'
	) as is_production$_T
)
export type is_production_T = boolean
export interface is_production$_T extends Readable$<is_production_T> {}
export { is_production$_b as b__is__production }
