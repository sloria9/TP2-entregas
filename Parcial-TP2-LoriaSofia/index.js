import Service from './service/numeroService.js'

import config from './config.js'

const server = new Service(config.PORT)
server.start()

