import { writable, derived, Writable } from 'svelte/store'
import { _b } from '@ctx-core/object'
import { _eql } from '@ctx-core/function'
export const b__NODE_ENV = _b('__NODE_ENV', ()=>
	writable(process.env.NODE_ENV))
export const __NODE_ENV = b__NODE_ENV()
export type $CACHE_VERSION_type = false|string
export type CACHE_VERSION_type = Writable<$CACHE_VERSION_type>
export const b__CACHE_VERSION = _b<CACHE_VERSION_type>('__CACHE_VERSION', ()=>
	writable(
		typeof process === 'object'
		&& process.env.CACHE_VERSION) as CACHE_VERSION_type)
export const __CACHE_VERSION = b__CACHE_VERSION()
export type $VERSION_type = string|number
export type VERSION_type = Writable<$VERSION_type>
export const b__VERSION = _b<VERSION_type>('__VERSION', ()=>
	writable(
		(typeof process === 'object' && (
			process.env.VERSION
			|| process.env.HEROKU_SLUG_COMMIT
		))
		|| Math.random()))
export const __VERSION = b__VERSION()
export const b__is__production = _b('__is__production', ctx=>
	derived(
		b__NODE_ENV(ctx),
		NODE_ENV=>
			NODE_ENV === 'prod'
			|| NODE_ENV === 'production'))
export const __is__production = b__is__production()
export const b__is__staging = _b('__is__staging', ctx=>
	derived(
		b__NODE_ENV(ctx),
		_eql('staging')))
export const __is__staging = b__is__staging()
export const b__is__development = _b('__is__development', ctx=>
	derived(
		b__NODE_ENV(ctx),
		NODE_ENV=>
			NODE_ENV === 'dev'
			|| NODE_ENV === 'development'))
export const __is__development = b__is__development()
