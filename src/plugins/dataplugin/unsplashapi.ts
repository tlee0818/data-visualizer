import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import { createClient, PhotosWithTotalResults } from 'pexels';
import { createApi } from 'unsplash-js';
import { resourceLimits } from "worker_threads";

// on your node server
const unsplash = createApi({
  accessKey: 'W_5CzAuk9Md1bR7u4agSNo0OwWKr0N5H',
});


function newUnsplashApi(): DataPlugin{


    return{
        getDataPluginName (): string {
            return "Unsplash API"
        },


        async queryImage (keyword: string): Promise<FrameworkImage> {
            const imgPromise = await unsplash.photos.get({ photoId: keyword})
                .then(res => {
                    if (res.errors){
                        throw new Error(res.errors[0])
                    }
                    else{
                        return res.response
                    }
                })
                .then(photo => {
                    const imgName = photo.description as string
                    const imgUrl = photo.urls.regular
                    const imgHeight = photo.height
                    const imgWidth = photo.width
                    return new FrameworkImage(imgName, imgHeight, imgWidth, imgUrl)
                })
            
            return imgPromise
        }
    }
}



export { newUnsplashApi }