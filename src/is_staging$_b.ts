import { B, be_ } from '@ctx-core/object'
import { eql_ } from '@ctx-core/function'
import { derived$, Readable$ } from '@ctx-core/store'
import { NODE_ENV$_b } from './NODE_ENV$_b'
import type { env_Ctx } from './env_Ctx'
const key = 'is_staging$'
export const is_staging$_b:B<env_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		NODE_ENV$_b(ctx),
		eql_(['staging'])
	) as is_staging$_T
)
export type is_staging_T = boolean
export interface is_staging$_T extends Readable$<is_staging_T> {}
export { is_staging$_b as b__is__staging }
