export default function import_meta_env__ensure():ImportMetaEnv
declare global {
	interface ImportMeta {
		readonly env:ImportMetaEnv
	}
}
interface ImportMetaEnv {
	[key:string]:any;
}
