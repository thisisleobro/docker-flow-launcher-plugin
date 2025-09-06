import { getNewDockerInstance } from "../../utils/docker.js";
import { Response, ResponseItem } from "../../utils/response.js";
import { Docker } from 'docker-cli-js';


export function imageCommands(_parameters, respond) {
	const docker = getNewDockerInstance()

	if (!docker) {
		return respond(new Response('No docker instance running yet', docker || 'undefined'))
	}

	docker.command('images')
		.then((result) => {
			const {images} = result

			if (!images || images.length === 0 ) {
				return respond(new Response('image list is empty'))
			}

			return respond(new Response(images
				// .sort((image) => image.created)
				.map(({repository, tag, 'image id': imageId, created, size}) =>
				new ResponseItem(
					`${repository}:${tag} (${imageId})`,
					`created ${created}. ${size}`,
				)
			)))
		})
		.catch((e) => {
			return new Response('Erro connecting to docker')
		})
}