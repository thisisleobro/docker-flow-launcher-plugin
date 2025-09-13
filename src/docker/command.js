import { isDockerRunning } from "../utils/docker.js"
import { defaultRespondFunction, Response, ResponseItem } from "../utils/response.js"
import { getPluginKeyword } from "../utils/settings.js"
import {containerCommands} from './containers/container-commads.js'
import { imageCommands } from "./images/image-commands.js"
import { launchDockerDesktop } from "./launch-docker/index.js"

const LAUNCHDOCKERDESKTOP = 'launch-docker-desktop'


export default async function dockerCommand(method, parameters, settings, respond = defaultRespondFunction) {
	const pluginKeyword = getPluginKeyword()

	if (method === LAUNCHDOCKERDESKTOP) {
		return await launchDockerDesktop()
	}

	// in case docker is not running
	const running = await isDockerRunning()

	if (!running) {
		return respond(new Response([
			new ResponseItem(
				'docker seems to be paused, starting or not running at all',
				'click to try starting docker. If paused unpause from Docker Desktop',
				{
					method: LAUNCHDOCKERDESKTOP
				}
			)
		]))
	}

	const topLevelCommands = [
		{
			command: 'containers',
			description: 'List all containers',
		},
		{
			command: 'images',
			description: 'List all images',
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
				}
			)
		)))
	}

	if (parameters[0] === 'containers') {
		return containerCommands(parameters, settings, respond)
	}

	if (parameters[0] === 'images') {
		return imageCommands(parameters, settings, respond)
	}

	// TODO: Try filtering possible combinations
	return respond(new Response())
}