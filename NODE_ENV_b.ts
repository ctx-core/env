import { _b } from '@ctx-core/object'
import { writable } from '@ctx-core/store'
export const NODE_ENV_b = _b('NODE_ENV', ()=>
	writable(process.env.NODE_ENV))
export { NODE_ENV_b as b__NODE_ENV }
