interface Image {

    /**
       * Gets the name of the plug-in game.
       */
    getName: () => string
  
    /**
       * Gets the width (in squares) of the plug-in game's grid.
       */
    getHeight: () => number
  
    /**
       * Returns the width (in squares) of the plug-in game's grid.
       */
    getWidth: () => number

    //bytes or url
    getImage: () => string

    /**
       * Returns the dictionary of key: color name in english, value: density value of this image
       */
     getColorDensities: () => { [colorName: string]: number }


}
