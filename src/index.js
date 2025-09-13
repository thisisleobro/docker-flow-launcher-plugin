import {logger} from './utils/logger.js'

logger.log("docker plugin called")

const parsedArgv2 = JSON.parse(process.argv[2])

logger.log('argv2:', parsedArgv2)

const { method, parameters, settings } = parsedArgv2

import dockerCommand from './docker/command.js'

dockerCommand(method, parameters, settings)