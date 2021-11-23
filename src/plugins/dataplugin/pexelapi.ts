import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import { createClient, PhotosWithTotalResults, ErrorResponse } from 'pexels';





const fetch = require('sync-fetch');

const API_KEY = '563492ad6f917000010000011e29c6b481a64d70980602260933fb31'

const client = createClient(API_KEY);

function newPexelApi(): DataPlugin{


    return{
        getDataPluginName (): string {
            return "Pexels API"
        },


        async queryImage (keyword: string): Promise<FrameworkImage> {
            const imgPromise = await client.photos.search({ query: keyword, per_page: 1 })
                .then(res => {
                    return (res as PhotosWithTotalResults)
                })
                .then(photos => {
                    const imgName = `Photo By ${photos.photos[0].photographer}`
                    const imgUrl = photos.photos[0].url
                    return new FrameworkImage(imgName, 0, 0, imgUrl)
                })
            
            return imgPromise
        }
    }
}



export { newPexelApi }