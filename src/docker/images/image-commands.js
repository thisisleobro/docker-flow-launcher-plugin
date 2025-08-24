import { Response, ResponseItem } from "../../utils/response.js";
import { Docker } from 'docker-cli-js';


export function imageCommands(_parameters, respond) {
	const docker = new Docker({echo: false})

	docker.command('images')
		.then((result) => {
			const {images} = result

			return respond(new Response(images
				// .sort((image) => image.created)
				.map(({repository, tag, 'image id': imageId, created, size}) =>
				new ResponseItem(
					`${repository}:${tag} (${imageId})`,
					`created ${created}. ${size}`,
					null,
					"assets/docker.png",
				)
			)))
		})
		.catch((e) => {
			return new Response('Erro connecting to docker')
		})
}