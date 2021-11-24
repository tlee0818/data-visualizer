import * as c3 from "c3"
import { DisplayPlugin } from "../../core/displayplugin";
import { FrameworkImage } from "../../core/frameworkimage";
import { ColorFramework } from "../../core/framework";


function newBarPlugin () : DisplayPlugin {
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
            const columns = parseImageToList(image)
            const dict = createHexDictionary(image)
            const colors : string[] = []
            for (let i = 0; i < columns.length; i++) {
                const colorName = columns[i][0] as string
                colors[i] = dict[colorName]
            }
            // var chart = c3.generate({
            //     bindto : "chart",
            //     data: {
            //         columns: columns as [string, ...c3.Primitive[]][],
            //         type : 'bar',
            //         onclick: function (d, i) { console.log("onclick", d, i); },
            //         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            //         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            //     },
            //     color: {
            //         pattern: colors
            //       }
            // })
            return "<div id=chart></div>"
        },


        getDisplayPluginName: () => "Bar Chart",


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


export {newBarPlugin}