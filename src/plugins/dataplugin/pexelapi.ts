import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import { createClient } from 'pexels';





const fetch = require('sync-fetch');

const API_KEY = '563492ad6f917000010000011e29c6b481a64d70980602260933fb31'

const client = createClient('YOUR_API_KEY');

async function setImageDetails(image: FrameworkImage, urlPromise: Promise<FrameworkImage>){

}

function newPexelApi(): DataPlugin{


    return{
        getDataPluginName (): string {
            return "Pexels API"
        },


        async queryImage (keyword: string): Promise<FrameworkImage> {
            const imgPromise = await client.photos.search({ query: keyword, per_page: 1 })
                .then(photos => {
                    const imgName = `Photo By ${photos[0].photographer}`
                    const imgUrl = photos[0].url
                    return new FrameworkImage(imgName, 0, 0, imgUrl)
                })
            
            return imgPromise
        }
    }
}



export { newPexelApi }