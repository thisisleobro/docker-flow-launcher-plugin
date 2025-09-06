import { spawn } from 'child_process'
import path from 'path'
import os from 'os'


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

// // Example usage
// (async () => {
// 	try {
// 		await launchDockerDesktop();
// 		console.log('🚀 Docker Desktop launch command sent.');
// 	} catch (err) {
// 		console.error('❌ Error launching Docker Desktop:', err.message);
// 	}
// })();
