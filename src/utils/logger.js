import * as fs from 'fs'
import { Writable } from 'stream'

/**
 * TODO: maybe validate if certain file exist to enable debugging
 */
export const logger = fs.existsSync('DEBUG')?
	new console.Console(fs.createWriteStream('./debug.log', {flags: 'a'})):
	new console.Console(new Writable())
