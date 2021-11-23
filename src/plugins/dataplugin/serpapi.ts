import { resolve } from "path/posix";
import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/frameworkimage";
const fetch = require('sync-fetch');

const API_KEY = 'd03c0cf76d8b77cd3f89934eab1943039b6ce2d649e75d87f8e8b002f2c4e29c'

async function setImageDetails(image: FrameworkImage, urlPromise: Promise<FrameworkImage>){

}

function newSerpApi(): DataPlugin{

    let image: FrameworkImage

    return{
        getDataPluginName (): string {
            return "Serp API"
        },


        queryImage (keyword: string): FrameworkImage {

            let imgName = ""
            let imgUrl = ""

            const requestURL = `https://serpapi.com/search.json?engine=google&q=${keyword}&google_domain=google.com&gl=us&hl=en&tbm=isch&num=1&ijn=0&api_key=${API_KEY}`

            const json = fetch(requestURL).json()

            console.log("name" + json.images_results[0].title)
            return new FrameworkImage(json.images_results[0].title, 0, 0, json.images_results[0].original)
            console.log("before")
            setTimeout(() => {
                
            }, 6000);
            console.log("after")
            console.log("name" + image.getName())
            //console.log("name" + resultImage.getName)
            return image
        }
    }
}



export { newSerpApi }