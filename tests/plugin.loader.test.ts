
import { DataPlugin } from "../src/core/dataplugin";
import { ColorFrameworkImpl } from "../src/core/frameworkimpl";
import { loadDataPlugins } from "../src/pluginloader";

const frame = new ColorFrameworkImpl

const dataPlugins = loadDataPlugins("./plugins/dataplugin")

test("print plugins", () => {

    return dataPlugins.then(data => {
        console.log(data, "wtf")
        expect(data.length).toBeGreaterThan(0)
        })
    })
