import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { CACHE_VERSION_T } from './CACHE_VERSION_b'
import { CACHE_VERSION_b } from './CACHE_VERSION_b'
import type { NODE_ENV_T } from './NODE_ENV_b'
import { NODE_ENV_b } from './NODE_ENV_b'
import type { VERSION_T } from './VERSION_b'
import { VERSION_b } from './VERSION_b'
import type { is_development_T } from './is_development_b'
import { is_development_b } from './is_development_b'
import type { is_production_T } from './is_production_b'
import { is_production_b } from './is_production_b'
import type { is_staging_T } from './is_staging_b'
import { is_staging_b } from './is_staging_b'
export interface env_ctx_I {
	CACHE_VERSION?:CACHE_VERSION_T
	NODE_ENV?:NODE_ENV_T
	VERSION?:VERSION_T
	is_development?:is_development_T
	is_production?:is_production_T
	is_staging?:is_staging_T
	env_b_h?:env_b_h_T
}
export interface env_b_h_T {
	get CACHE_VERSION():CACHE_VERSION_T
	get NODE_ENV():NODE_ENV_T
	get VERSION():VERSION_T
	get is_development():is_development_T
	get is_production():is_production_T
	get is_staging():is_staging_T
}
export function env_b_h_b(ctx:env_ctx_I):B<env_ctx_I, 'env_b_h'> {
	return _b('env_b_h', ()=>{
		return {
			get CACHE_VERSION() { return CACHE_VERSION_b(ctx) },
			get NODE_ENV() { return NODE_ENV_b(ctx) },
			get VERSION() { return VERSION_b(ctx) },
			get is_development() { return is_development_b(ctx) },
			get is_production() { return is_production_b(ctx) },
			get is_staging() { return is_staging_b(ctx) }
		}
	})
}