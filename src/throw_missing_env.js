import { error__throw } from '@ctx-core/error'
/**
 * Throws an error for for a missing env variable
 */
/** @type {import('throw_missing_env').throw_missing_env} */
export const throw_missing_env = (env_name)=>{
	const error_message = `
${env_name} environment variable not set.
dev: make sure ${env_name} is set in your .env file
heroku: make sure ${env_name} is set using \`heroku config:set\`
	`.trim()
	error__throw({
		error_message,
		type: 'missing_env'
	})
}
export { throw_missing_env as throw__missing__env }
