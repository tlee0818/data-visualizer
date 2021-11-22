
import { DataPlugin } from "../dataplugin"

function newDataPluginStub () : DataPlugin {
    return {
        getDataPluginName: () => "stub",
        /**
          * Get images from the user query
          *
          * @param keyword The keyword the user is trying to query for.
          * @param numImage Number of images the user wants to query.
          * @return a list of {@link Image} as a result of the query
          */
       queryImages: (keyword: String, numImage: number) => []
    }
}

const exportObj = {pluginInit : newDataPluginStub, name : "newDataPluginStub"}
export { exportObj }