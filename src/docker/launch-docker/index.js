import { spawn } from 'child_process'
import path from 'path'

/**
 * TODO: user docker desktop start to stard engine
 */
export function launchDockerDesktop() {
	return new Promise((resolve, reject) => {
		const dockerPath = path.join(
			'C:',
			'Program Files',
			'Docker',
			'Docker',
			'Docker Desktop.exe'
		);

		try {
			const child = spawn(dockerPath, {
				detached: true,   // keep running after Node exits
				stdio: 'ignore'   // ignore output
			});

			child.unref(); // allow parent to exit independently
			resolve(true);
		} catch (err) {
			reject(new Error(`Failed to launch Docker Desktop: ${err.message}`));
		}
	});
}