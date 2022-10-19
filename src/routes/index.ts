import {Express, Request, Response, Router} from 'express'

interface RouteConf {
    path: string,
    router: Router,
    meta?: unknown
}

const routeConf :Array<RouteConf> = [];

function routes(app:Express){

    app.get('/',(req :Request, res:Response)=>{
        res.status(200).send('hello')
    })
    
    routeConf.forEach((conf)=>app.use(conf.path,conf.router))

}

export default routes;