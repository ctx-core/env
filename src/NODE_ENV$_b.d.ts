import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { env_Ctx } from './env_Ctx';
declare const key = "NODE_ENV$";
export declare const NODE_ENV$_b: B<env_Ctx, typeof key>;
export declare type NODE_ENV_T = string;
export interface NODE_ENV$_T extends Writable$<NODE_ENV_T> {
}
export { NODE_ENV$_b as b__NODE_ENV };
