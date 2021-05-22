import { Readable$ } from '@ctx-core/store';
import { NODE_ENV_Ctx } from './NODE_ENV_b';
export interface is_development_Ctx extends NODE_ENV_Ctx {
    is_development?: is_development_T;
}
export declare const is_development_b: import("@ctx-core/object").Be<is_development_Ctx, "is_development", is_development_T>;
export declare type $is_development_T = boolean;
export interface is_development_T extends Readable$<$is_development_T> {
}
export { is_development_b as b__is__development };
