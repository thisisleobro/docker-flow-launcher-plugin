import { describe, expect, test } from 'vitest';
import { getApplicationSettings, getPluginSettings, getPluginKeyword } from '../utils/settings.js';

describe('Settings', () => {
	test('getApplicationSettings returns object', () => {
		const result = getApplicationSettings()

		expect(result).toBeDefined();
		// expect to have certain fields
	});

	test('getPluginSettings returns object', () => {
		const result = getPluginSettings()

		expect(result).toBeDefined();
		// expect to have certain fields
	});

	test('getPluginKeyword returns string', () => {
		const result = getPluginKeyword()

		expect(result).toBeDefined();
		// expect to be diferent than *
	});
});


// [
// 	{
// 		'container id': '2faf3c71f37b',
// 		image: 'wordpress:latest',
// 		command: '"docker-entrypoint.s…"',
// 		created: '6 seconds ago',
// 		status: 'Up 3 seconds',
// 		ports: '0.0.0.0:8080->80/tcp',
// 		names: 'nostalgic_proskuriakova'
// 	}
// ]

// docker.command('ps').then(function (data) {
// 	console.log('running containers = ', data.containerList);
// });