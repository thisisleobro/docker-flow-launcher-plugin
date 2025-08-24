// import { Docker } from 'docker-cli-js';
const { method, parameters } = JSON.parse(process.argv[2])
// import {exec} from 'child_process'
// import { getPluginKeyword } from './utils/settings.js';

// const QUERY = 'query'
// const LIST_RUNNING_CONTAINERS = 'list running containers'
// const LIST_IMAGES = 'List images'


// exec(`echo ${process.argv[2]}  | subl -`)

import dockerCommand from './docker/command.js'
import { defaultRespondFunction as respond, Response, ResponseItem } from './utils/response.js'


// respond(new Response(new ResponseItem('', process.argv[2])))


dockerCommand(parameters)


// if (method === QUERY) {

	// if (parameters[0] === LIST_RUNNING_CONTAINERS) {
	// 	const docker = new Docker({echo: false});

	// 	const {containerList} = await docker.command('ps')

	// 	console.log(JSON.stringify({
	// 		"result": containerList.map(({names, image, created, status, ports}) => ({
	// 			"Title": `${names} (${image})`,
	// 			"Subtitle": `created ${created} | ${status} | ${ports}`,
	// 			"IcoPath": "assets/docker.png"
	// 		}))
	// 	}));
	// } else if (parameters[0] === '') {
	// 	console.log(JSON.stringify({
	// 		"result": [{
	// 			"Title": LIST_RUNNING_CONTAINERS,
	// 			// "Subtitle": `(${parameters.join(', ')}) [${process.cwd()}]`,
	// 			"JsonRPCAction": {
	// 				"method": 'Flow.Launcher.ChangeQuery',
	// 				"parameters": [`${getPluginKeyword()} ${LIST_RUNNING_CONTAINERS}`, false],
	// 				"dontHideAfterAction": true,
	// 			},
	// 			"IcoPath": "assets/docker.png",
	// 		}]
	// 	}));
	// } else {

	// 	// indexCommand()
	// 	// Filter
	// 	// exec(`echo ${process.argv[2]}  | subl -`)
	// 	const filteredCommands = []
	// }
// }