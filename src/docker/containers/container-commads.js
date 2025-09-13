import { getNewDockerInstance } from "../../utils/docker.js";
import { Response, ResponseItem } from "../../utils/response.js";


/**
 * 
 * @param {{containerOrderField: 'Name' | 'State' | 'Creation date'}} settings
 */
export function containerCommands(_parameters, settings, respond) {
	const docker = getNewDockerInstance()

	const sortField = settings.containerOrderField;

	if (!docker) {
		return respond(new Response('No docker instance running yet'))
	}

	docker.command('ps --all')
		.then((result) => {
			const {containerList} = result

			if (!containerList || containerList.length === 0 ) {
				return respond(new Response('container list is empty'))
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