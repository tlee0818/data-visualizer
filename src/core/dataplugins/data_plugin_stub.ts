
import { DataPlugin } from "../dataplugin"
import {FrameworkImage} from "../image"

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
       queryImage: (keyword: String) => new FrameworkImage("banana", 1000, 1000, "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/271157_2200-732x549.jpg")
    }
}

const exportObj = {pluginInit : newDataPluginStub, name : "newDataPluginStub"}
export { exportObj }