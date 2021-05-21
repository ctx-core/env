import { Readable$ } from '@ctx-core/store';
import { NODE_ENV_Ctx } from './NODE_ENV_b';
export interface is_production_Ctx extends NODE_ENV_Ctx {
    is_production?: is_production_T;
}
export declare const is_production_b: import("@ctx-core/object").Be<is_production_Ctx, "is_production">;
export declare type $is_production_T = boolean;
export interface is_production_T extends Readable$<$is_production_T> {
}
export { is_production_b as b__is__production };
