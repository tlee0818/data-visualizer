import { DisplayPlugin } from "../../core/displayplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import { ColorFramework } from "../../core/framework";
import { parse } from "path/posix";


function newCloudPlugin () : DisplayPlugin {
    let parseImageToList = function (image : FrameworkImage) :  (string | number)[][] {
        const dens = image.getColorDensities()
        const L : (string | number)[][] = [[]]
        Object.keys(dens).forEach(color => {
            let value = dens[color];
            L.push([color, value * 10])
          });
        return L
        }
    let createHexDictionary = function (image: FrameworkImage) : {[colorName: string]: string} {
        return image.getColorHexes()
    }
    let makeWordcloudOptions = function (image: FrameworkImage)  {
        const listOption = parseImageToList(image)
        const hexDict = createHexDictionary(image)
        let createColorOption = function (colorName : string) {
            return hexDict[colorName]
        }
        return {list : listOption, color : createColorOption}
    }

       return {
        /**
         * gets the chart @param image color density values as html string
         */

        /** currently a stub.
         * step 1: create html document
         * step 2: load wordcloud2.js
         * step 3: run WordCloud(document.getElementById('my_canvas'), options ); with
         * the options generated below
         * step 4: get returnable HTML doc string
         */       
        getChart: function (image: FrameworkImage) : string {
            const options = makeWordcloudOptions(image)
            return ""
        },





        /**
         * Called (only once) when the plug-in is first registered with the
         * framework, giving the plug-in a chance to perform any initial set-up
         * such as loading the javascript
         *
         * @param framework The {@link ColorFramework} instance with which the plug-in
         *                  was registered.
         */
        onRegister: function (framework: ColorFramework) : void {
            console.log("nothing")
        }
    }
}