import { defaultRespondFunction, Response, ResponseItem } from "../utils/response.js"
import { getPluginKeyword } from "../utils/settings.js"
import {containerCommands} from './containers/container-commads.js'
import { imageCommands } from "./images/image-commands.js"

/**
 * @type {Command}
 */
export default function dockerCommand(parameters, respond = defaultRespondFunction) {
	const pluginKeyword = getPluginKeyword()

	const topLevelCommands = [
		{
			command: 'containers',
			description: 'List all containers'
		},
		{
			command: 'images',
			description: 'List all images'
		},
	]

	if (parameters[0] === '') {
		return respond(new Response(topLevelCommands.map(({command, description}) =>
			new ResponseItem(
				command,
				description,
				{
					method: 'Flow.Launcher.ChangeQuery',
					parameters: [`${pluginKeyword} ${command}`, false],
					dontHideAfterAction: true
				},
				'assets/docker.png'
			)
		)))
	}


	if (parameters[0] === 'containers') {
		return containerCommands(parameters, respond)
	}

	if (parameters[0] === 'images') {
		return imageCommands(parameters, respond)
	}

	// Try filtering possible combinations
	return respond(new Response())
}