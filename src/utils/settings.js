import { readFileSync } from 'fs'
import path from 'path'


const getObjectFromJsonFile = (filename) => JSON.parse(readFileSync(filename).toString())

export const getApplicationSettings = () => getObjectFromJsonFile(path.join(process.cwd(), '../..', 'Settings', 'Settings.json'))

export const getPluginSettings = () => getObjectFromJsonFile(path.join(process.cwd(), 'plugin.json'))

export const getPluginKeyword = () =>
	getApplicationSettings()
		.PluginSettings
		.Plugins[getPluginSettings().ID]
		.ActionKeywords[0]
