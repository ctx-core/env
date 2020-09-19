import { Writable } from 'svelte/store';
export declare const b__NODE_ENV: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<string | undefined>;
export declare const __NODE_ENV: Writable<string | undefined>;
export declare type $CACHE_VERSION_type = false | string;
export declare type CACHE_VERSION_type = Writable<$CACHE_VERSION_type>;
export declare const b__CACHE_VERSION: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => CACHE_VERSION_type;
export declare const __CACHE_VERSION: CACHE_VERSION_type;
export declare type $VERSION_type = string | number;
export declare type VERSION_type = Writable<$VERSION_type>;
export declare const b__VERSION: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => VERSION_type;
export declare const __VERSION: VERSION_type;
export declare const b__is__production: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<boolean>;
export declare const __is__production: import("svelte/store").Readable<boolean>;
export declare const b__is__staging: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<boolean>;
export declare const __is__staging: import("svelte/store").Readable<boolean>;
export declare const b__is__development: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => import("svelte/store").Readable<boolean>;
export declare const __is__development: import("svelte/store").Readable<boolean>;
