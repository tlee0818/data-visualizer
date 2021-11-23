import { DataPlugin } from './dataplugin'
import { DisplayPlugin } from './displayplugin'
import { ColorFramework } from './framework'
import { Image } from './image'

/**
 * The framework core implementation.
 */
class ColorFrameworkImpl implements ColorFramework {
    private _selectedImage: Image | null = null
    private _currentDataPlugin: DataPlugin | null = null
    private _currentDisplayPlugin: DisplayPlugin | null = null
    private _dataPlugins: DataPlugin[] = []
    private _displayPlugins: DisplayPlugin[] = []

    constructor(){
        
    }

    makeQuery(keyword: string){
        if (this._currentDataPlugin === null){
            return
        }
        else{
            this._selectedImage = this._currentDataPlugin.queryImage(keyword)
        }
    }

    getImage(): Image | null{
        if (this._selectedImage === null){
            return null
        }
        else{
            return this._selectedImage
        }
    }

    getColorDensityChart(image: Image): string{
        if (this._currentDisplayPlugin === null){
            return "Chart Not Available"
        }
        else{
            return this._currentDisplayPlugin.getChart(image)
        }
    }

    fetchColorDensity(): void{
        //use the clarifaicall.ts
    }


    /**
     * Sets {@link DataPlugin} with the framework
     */
    setCurrentDataPlugin (pluginIndex: number): void {
        this._currentDataPlugin = this._dataPlugins[pluginIndex]
    }

    /**
     * Sets {@link DisplayPlugin} with the framework
     */
    setCurrentDisplayPlugin (pluginIndex: number): void {
        this._currentDisplayPlugin = this._displayPlugins[pluginIndex]
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
