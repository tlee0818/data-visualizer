class FrameworkImage {

    private _name: string
    private _height: number
    private _width: number
    private _imageUrl: string
    private _colorDensities: { [colorName: string]: number }



    constructor(name: string, height: number, width: number, imageUrl: string){
        this._name = name
        this._height = height
        this._width = width
        this._imageUrl = imageUrl
        this._colorDensities = {}
    }

    /**
       * Gets the name of the plug-in game.
       */
    public getName(): string{
        return this._name
    }
  
    /**
       * Gets the height of image
       */
    public getHeight(): number{
        return this._height
    }
  
    /**
       * Returns the width of image 
       */
    public getWidth(): number{
        return this._width
    }

    //bytes or url
    public getImage(): string{
        return this._imageUrl
    }

    /**
       * Returns the dictionary of key: color name in english, value: density value of this image
       */
    public getColorDensities(): { [colorName: string]: number }{
        return this._colorDensities
    }
    
    /**
       * Set {@param colorName} key's value to {@param densityValue} in integers. 
       */
    public setColorDensity(colorName: string, densityValue: number): void{
        this._colorDensities.colorName = densityValue
    }
}

export { FrameworkImage }
