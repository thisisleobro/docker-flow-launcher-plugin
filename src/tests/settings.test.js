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