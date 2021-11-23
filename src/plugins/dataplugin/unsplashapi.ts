import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
// on your node server
const unsplash = createApi({
  accessKey: 'W_5CzAuk9Md1bR7u4agSNo0OwWKr0N5H-8YIpBIWD-w',
});


function newUnsplashApi(): DataPlugin{


    return{
        getDataPluginName (): string {
            return "Unsplash API"
        },


        async queryImage (keyword: string): Promise<FrameworkImage> {
            const imgPromise = await unsplash.search.getPhotos({
                query: keyword,
                page: 1,
                perPage: 1,
              })
                .then(res => {
                    if (res.errors){
                        throw new Error(res.errors[0])
                    }
                    else{
                        return res.response.results[0]
                    }
                })
                .then(photo => {
                    const imgName = photo.description as string
                    const imgUrl = photo.urls.regular
                    const imgHeight = photo.height
                    const imgWidth = photo.width
                    return new FrameworkImage(imgName, imgHeight, imgWidth, imgUrl)
                })
                .catch(err => {
                    return new FrameworkImage(err, 0, 0, "")
                })

            return imgPromise
        }
    }
}



export { newUnsplashApi }