import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { NODE_ENV$_b } from './NODE_ENV$_b'
import type { env_Ctx } from './env_Ctx'
const key = 'is_development$'
export const is_development$_b:B<env_Ctx, typeof key> = be_(key, ctx=>
	derived$(NODE_ENV$_b(ctx),
		NODE_ENV=>
			NODE_ENV === 'dev' || NODE_ENV === 'development'
	) as is_development$_T
)
export type is_development_T = boolean
export interface is_development$_T extends Readable$<is_development_T> {}
export { is_development$_b as b__is__development }
