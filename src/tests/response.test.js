import { describe, expect, test } from 'vitest';
import { Response, ResponseItem } from '../utils/response';

describe('Response', () => {
	test('Response.result to be always an array', () => {
		const single = new Response(new ResponseItem('Test response item'))

		const multiple = new Response([
			new ResponseItem('First value'),
			new ResponseItem('Second value')
		])

		const empty = new Response()

		expect(single.result).instanceof(Array);
		expect(multiple.result).instanceof(Array);
		expect(empty.result).instanceof(Array);
	});
});