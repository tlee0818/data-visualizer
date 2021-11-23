import { DisplayPlugin } from "../../core/displayplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import { ColorFramework } from "../../core/framework";


function newCloudPlugin () : DisplayPlugin {
    let parseImageToList = function (image : FrameworkImage) :  (string | number)[][] {
        const dens = image.getColorDensities()
        const L : (string | number)[][] = [[]]
        Object.keys(dens).forEach(color => {
            let value = dens[color];
            L.push([color, value * 10])
          });
        return L
    let createHexDictionary = function (image : FrameworkImage) : 
    }
       return {
        /**
         * gets the chart @param image color density values as html string
         */
        getChart: function (image: FrameworkImage) : {[colorName: string]: string} {
            
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