import * as https from 'https'
import { DataPlugin } from './dataplugin'
import { DisplayPlugin } from './displayplugin'
import { ColorFramework } from './framework'
import { FrameworkImage } from './frameworkimage'

/**
 * The framework core implementation.
 */
const api_key = "e7dc7fa122b345bfb36086ff6be159bc"
const ml_options = {
    hostname: "api.clarifai.com",
    path: '/v2/models/eeed0b6733a644cea07cf4c60f87ebb7/outputs',
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Key " + api_key
    }
}
const ml_request_data = `{
            "inputs": [
            {
                "data": {
                "image": {
                    "url": "https://www.riotgames.com/darkroom/2880/b540da2b9afe5ec83e842a2d84f6dbb1:124960a6bcca772b493c3adf4d5745ec/arcane-final-poster-16x9-no-text-no-border.jpg"
                }
                }
            }
            ]
        }`

class ColorFrameworkImpl implements ColorFramework {
    private _selectedImage: FrameworkImage | null = null
    private _chartHtmlString: string = ""
    private _currentDataPlugin: DataPlugin | null = null
    private _currentDisplayPlugin: DisplayPlugin | null = null
    private _dataPlugins: DataPlugin[] = []
    private _displayPlugins: DisplayPlugin[] = []

    constructor(){
        
    }

    async makeQuery(keyword: string): Promise<void>{
        if (this._currentDataPlugin === null){
            return
        }
        else{
            const imgPromise = await this._currentDataPlugin.queryImage(keyword)
                    .then(image => {
                        this._selectedImage = image
                    })
            
            return imgPromise
        }
    }

    getColorDensityChart(): void{
        console.log("getColorDensity")
        if (this._currentDisplayPlugin === null){
            this._chartHtmlString = "Chart Not Available"
            console.log("Chart Not Available")
        }
        else if (this._selectedImage === null){
            this._chartHtmlString = "Image Not Selected"
            console.log("Image Not Selected")
        }
        else{
            console.log("getChart")
            this._chartHtmlString = this._currentDisplayPlugin.getChart(this._selectedImage)
        }
    }

    getChartHtmlString(): string{
        return this._chartHtmlString
    }

    fetchColorDensity(): void{
        //use the clarifaicall.ts
        if (this._selectedImage !== null){
            const imgURL = this._selectedImage.getImage()
        } else {
            return
        }
        const req = https.request(ml_options, res => {
        //callback for nonerror results
        console.log(`statusCode: ${res.statusCode}`)
        
        //result is a stream and hence requires another callback to read data
        let responseBody = '';
        
        res.on('data', (chunk) => {
            responseBody += chunk;
        });
        
        res.on('end', () => {
            const parsedOutput = JSON.parse(responseBody)
            const outputdata = parsedOutput.outputs[0].data
            if (outputdata !== {}){
                const colors = outputdata.colors
                for (let color of colors){
                    const colorname = color.w3c.name
                    const hexvalue = color.w3c.hex
                    const densityvalue = color.value
                    if (this._selectedImage !== null){
                        this._selectedImage.setColorDensity(colorname, densityvalue)
                        this._selectedImage.setColorHexes(colorname, hexvalue)
                    } else {
                        return
                    }
                }
            }
            });
        })
        
        //set up callback for error
        req.on('error', error => {
            console.error(error)
        })
        req.write(ml_request_data)
        
        //finishes sending the request
        req.end()
    }

    //reset current plugins and image
    startNewAnalysis(): void{
        this._selectedImage = null
        this._currentDataPlugin = null
        this._currentDisplayPlugin = null
    }

    getRegisteredDataPluginName (): string[] {
        return this._dataPlugins.map(p => p.getDataPluginName())
    }

    getRegisteredDisplayPluginName (): string[] {
        return this._displayPlugins.map(p => p.getDisplayPluginName())
    }

    getCurrentDataPlugin (): DataPlugin | null {
        return this._currentDataPlugin
    }

    getCurrentDisplayPlugin (): DisplayPlugin | null {
        return this._currentDisplayPlugin
    }

    getSelectedImage (): FrameworkImage | null {
        return this._selectedImage
    }


    /**
     * Sets {@link DataPlugin} with the framework
     */
    setCurrentDataPlugin (pluginIndex: number): void {
        if (pluginIndex < this._dataPlugins.length){
            this._currentDataPlugin = this._dataPlugins[pluginIndex]
        } else {
            return
        }
    }

    /**
     * Sets {@link DisplayPlugin} with the framework
     */
    setCurrentDisplayPlugin (pluginIndex: number): void {
        if (pluginIndex < this._dataPlugins.length){
            this._currentDisplayPlugin = this._displayPlugins[pluginIndex]
        } else {
            return
        }
    }

    /**
     * Registers a new {@link DataPlugin} with the framework
     */
    registerDataPlugin (plugin: DataPlugin): void {
        this._dataPlugins.push(plugin)
    }

    /**
     * Registers a new {@link DisplayPlugin} with the framework
     */
    registerDisplayPlugin (plugin: DisplayPlugin): void {
        plugin.onRegister(this)
        this._displayPlugins.push(plugin)
    }
}

export { ColorFrameworkImpl }
