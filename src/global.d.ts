import {Response} from './utils/response'

type Command = (parameters: string[], respond: (message: Response) => void) => void