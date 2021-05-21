import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { NODE_ENV_b, NODE_ENV_ctx_I } from './NODE_ENV_b'
const key = 'is_development'
export interface is_development_ctx_I extends NODE_ENV_ctx_I {
	is_development?:is_development_T
}
export const is_development_b = _b<is_development_ctx_I, typeof key>(key, ctx=>
	derived$(NODE_ENV_b(ctx),
		NODE_ENV=>
			NODE_ENV === 'dev' || NODE_ENV === 'development'
	) as is_development_T
)
export type $is_development_T = boolean
export interface is_development_T extends Readable$<$is_development_T> {}
export { is_development_b as b__is__development }
