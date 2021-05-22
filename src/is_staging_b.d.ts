import { Readable$ } from '@ctx-core/store';
import { NODE_ENV_Ctx } from './NODE_ENV_b';
export interface is_staging_Ctx extends NODE_ENV_Ctx {
    is_staging?: is_staging_T;
}
export declare const is_staging_b: import("@ctx-core/object").Be<is_staging_Ctx, "is_staging", is_staging_T>;
export declare type $is_staging_T = boolean;
export interface is_staging_T extends Readable$<$is_staging_T> {
}
export { is_staging_b as b__is__staging };
