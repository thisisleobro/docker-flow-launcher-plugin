import { Response, ResponseItem } from "../../utils/response.js";
import { Docker } from 'docker-cli-js';


export function containerCommands(_parameters, respond) {
	const docker = new Docker({echo: false});
	docker.command('ps --all')
		.then((result) => {
			const {containerList} = result

			return respond(new Response(containerList.map(({names, image, created, status, ports}) =>
				new ResponseItem(
					`${names} (${image})`,
					`created ${created} | ${status} | ${ports}`,
					null,
					"assets/docker.png",
				)
			)))
		})
		.catch(() => {
			return new Response('Erro connecting to docker')
		})
}