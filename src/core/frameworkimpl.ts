import { DataPlugin } from './dataplugin'
import { DisplayPlugin } from './displayplugin'
import { ColorFramework } from './framework'
import { Image } from './image'

/**
 * The framework core implementation.
 */
class ColorFrameworkImpl implements ColorFramework {
    private _images: Image[] = []
    private _currentDataPlugin: DataPlugin | null = null
    private _currentDisplayPlugin: DisplayPlugin | null = null
    private _dataPlugins: DataPlugin[] = []
    private _displayPlugins: DisplayPlugin[] = []

    constructor(){
        
    }

    public makeQuery(keyword: string, numImage: number){
        if (this._currentDataPlugin === null){
            return
        }
        else{
            this._images = this._currentDataPlugin.queryImages(keyword, numImage)
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
        this._displayPlugins.push(plugin)
    }
}

export { ColorFrameworkImpl }
