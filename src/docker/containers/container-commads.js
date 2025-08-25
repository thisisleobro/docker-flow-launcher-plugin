import { Response, ResponseItem } from "../../utils/response.js";
import { Docker } from 'docker-cli-js';


export function containerCommands(_parameters, respond) {
	const docker = new Docker({echo: false});
	docker.command('ps --all')
		.then((result) => {
			const {containerList} = result

			if (!containerList || containerList.length === 0 ) {
				return respond(new Response(
					new ResponseItem('container list is empty', null, null, 'assets/docker.png')
				))
			}

			return respond(new Response(containerList.map(({names, image, created, status, ports}) =>
				new ResponseItem(
					`${names} (${image})`,
					`created ${created} | ${status} | ${ports}`,
					null,
					status.startsWith('Exited')? 'assets/grayscale.png': "assets/docker.png",
				)
			)))
		})
		.catch(() => {
			return new Response('Erro connecting to docker')
		})
}