import { Writable$ } from '@ctx-core/store';
export interface VERSION_ctx_I {
    VERSION?: VERSION_T;
}
export declare const VERSION_b: import("@ctx-core/object").Be<VERSION_ctx_I, "VERSION">;
export { VERSION_b as b__VERSION };
export declare type $VERSION_T = string;
export interface VERSION_T extends Writable$<$VERSION_T> {
}
