import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import fetch from "node-fetch";

const API_KEY = 'd03c0cf76d8b77cd3f89934eab1943039b6ce2d649e75d87f8e8b002f2c4e29c'

function getFirstImage(jsonString: string){
    //return jsonString."images_results"
}

function newSerpApi(): DataPlugin{

    return{
        getDataPluginName (): string {
            return "Serp API"
        },


        queryImage (keyword: string): FrameworkImage {

            const requestURL = `https://serpapi.com/search.json?engine=google&q=${keyword}&google_domain=google.com&gl=us&hl=en&tbm=isch&num=1&ijn=0&api_key=${API_KEY}`

            const returnJson = fetch(requestURL)
                    .then(res => {
                        if (!res.ok){
                            throw new Error(res.statusText)
                        }
                        return res.json()
                    })
                    .then(data => {
                        console.log(data)
                        return data
                    })


            return new FrameworkImage("hi", 1, 1, "hi")
        }
    }
}



export { newSerpApi }