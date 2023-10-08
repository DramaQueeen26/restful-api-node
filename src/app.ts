import { envs } from './config/envs'
import { MongoDabatase } from './data'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

(async()=> {
  main()
})()

async function main() {

  await MongoDabatase.connect({ mongoUrl: envs.MONGODB_URL, dbName: envs.MONGODB_NAME })

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  })

  server.start()
}