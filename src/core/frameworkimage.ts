class FrameworkImage {

    private _name: string
    private _height: number
    private _width: number
    private _imageUrl: string
    private _colorDensities: { [colorName: string]: number }
    private _colorHexes: { [colorName: string]: string }


    constructor(name: string, height: number, width: number, imageUrl: string){
        this._name = name
        this._height = height
        this._width = width
        this._imageUrl = imageUrl
        this._colorDensities = {}
        this._colorHexes = {}
    }

    /**
       * Gets the name of the plug-in game.
       */
    public getName(): string{
        return this._name
    }

    public setName(name: string): void{
        this._name = name
    }
  
    /**
       * Gets the height of image
       */
    public getHeight(): number{
        return this._height
    }

    public setHeight(height: number): void{
        this._height = height
    }
  
    /**
       * Returns the width of image 
       */
    public getWidth(): number{
        return this._width
    }

    public setWidth(width: number): void{
        this._width = width
    }

    //bytes or url
    public getImage(): string{
        return this._imageUrl
    }

    //bytes or url
    public setImage(url: string): void{
        this._imageUrl = url
    }

    /**
       * Returns the dictionary of key: color name in english, value: density value of this image
       */
    public getColorDensities(): { [colorName: string]: number }{
        return this._colorDensities
    }

    public getColorHexes(): { [colorName: string]: string }{
        return this._colorHexes
    }

    /**
       * Set {@param colorName} key's value to {@param densityValue} in integers. 
       */
    public setColorDensity(colorName: string, densityValue: number): void{
        this._colorDensities[colorName] = densityValue
    }
    public setColorHexes(colorName: string, hexValue: string): void{
        this._colorHexes[colorName] = hexValue
    }
}

export { FrameworkImage }
