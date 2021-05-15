import { error_ctx_I, throw_error } from '@ctx-core/error'
/**
 * Throws an error for for a missing env variable
 */
export function throw_missing_env(env_name: string) {
	const error_message = `
${env_name} environment variable not set.
dev: make sure ${env_name} is set in your .env file
heroku: make sure ${env_name} is set using \`heroku config:set\`
	`.trim()
	throw_error({ error_message, type: 'missing_env' } as error_ctx_I)
}
export {
	throw_missing_env as throw__missing__env
}
