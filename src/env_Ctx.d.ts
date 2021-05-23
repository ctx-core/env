import type { CACHE_VERSION_T } from './CACHE_VERSION_b';
import type { is_development_T } from './is_development_b';
import type { NODE_ENV_T } from './NODE_ENV_b';
import type { is_staging_T } from './is_staging_b';
import type { is_production_T } from './is_production_b';
import type { VERSION_T } from './VERSION_b';
export interface env_Ctx {
    CACHE_VERSION?: CACHE_VERSION_T;
    is_development?: is_development_T;
    is_production?: is_production_T;
    is_staging?: is_staging_T;
    NODE_ENV?: NODE_ENV_T;
    VERSION?: VERSION_T;
}
