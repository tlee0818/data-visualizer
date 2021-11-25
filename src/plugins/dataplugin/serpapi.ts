import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/frameworkimage";
//import {fetch} from "node-fetch"

const API_KEY = 'd03c0cf76d8b77cd3f89934eab1943039b6ce2d649e75d87f8e8b002f2c4e29c'

const fetch = require("node-fetch")



function newSerpApi(): DataPlugin{

    return{
        getDataPluginName (): string {
            return "Serp API"
        },


        async queryImage (keyword: string): Promise<FrameworkImage> {

            const requestURL = `https://serpapi.com/search.json?engine=google&q=${keyword}&google_domain=google.com&gl=us&hl=en&tbm=isch&num=1&ijn=0&api_key=${API_KEY}`
3
            const resultPromise = await fetch(requestURL)
                .then(res => {
                    if (!res.ok) { // res.status >= 200 && res.status < 300
                        console.log("error exists")
                        throw new Error(res.e
                        )
                    }
                    else{
                        console.log("no error, promise<json>")
                        return res.json()
                    }  
                })
                .then(json => {
                    //console.log(json)
                    console.log("no error, promise<img>")
                    return new FrameworkImage(json.images_results[0].title, 0, 0, json.images_results[0].original)
                })
                .catch(err => {
                    console.log("yes error, catching error")
                    console.log(err)
                    return new FrameworkImage(err, 0, 0, "")
                })
                
            return resultPromise
        }
    }
}



export { newSerpApi }