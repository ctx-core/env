import { Writable$ } from '@ctx-core/store';
export interface NODE_ENV_Ctx {
    NODE_ENV?: NODE_ENV_T;
}
export declare const NODE_ENV_b: import("@ctx-core/object").Be<NODE_ENV_Ctx, "NODE_ENV">;
export declare type $NODE_ENV_T = string;
export interface NODE_ENV_T extends Writable$<$NODE_ENV_T> {
}
export { NODE_ENV_b as b__NODE_ENV };
