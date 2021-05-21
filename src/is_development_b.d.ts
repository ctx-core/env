import { Readable$ } from '@ctx-core/store';
import { NODE_ENV_ctx_I } from './NODE_ENV_b';
export interface is_development_ctx_I extends NODE_ENV_ctx_I {
    is_development?: is_development_T;
}
export declare const is_development_b: import("@ctx-core/object").Be<is_development_ctx_I, "is_development">;
export declare type $is_development_T = boolean;
export interface is_development_T extends Readable$<$is_development_T> {
}
export { is_development_b as b__is__development };
