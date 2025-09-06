import { Docker } from 'docker-cli-js';
import * as http from 'http'
const PIPE_PATH = '\\\\.\\pipe\\docker_engine';


/**
 * 
 * @return {Promise<{bool}>}
 */
export const isDockerRunning = () => {
	return new Promise((resolve) => {
		const options = {
			socketPath: PIPE_PATH,
			path: '/info',
			method: 'GET'
		};

		const req = http.request(options, (res) => {
			let data = '';
			res.on('data', chunk => data += chunk);

			res.on('end', () => {
				try {
					JSON.parse(data)
					resolve(true)
				} catch(e) {
					resolve(false)
				}
			});
		});

		req.on('error', () => resolve(false));
		req.end();
	});
}

/**
 * 
 * @return {Docker} returns a Docker instance
 */
export const getNewDockerInstance = () =>
	new Docker({ echo: false})
