import { DataPlugin } from "../../core/dataplugin";
import { FrameworkImage } from "../../core/image";

const APIKEY = 'd03c0cf76d8b77cd3f89934eab1943039b6ce2d649e75d87f8e8b002f2c4e29c'

function newSerpApi(): DataPlugin{

    return{
        getDataPluginName (): string {
            return "Serp API"
        },

        queryImage (keyword: string): FrameworkImage {
            return new Image("hi", 1, 1, "hi")
        }
    }
}