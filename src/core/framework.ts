import { FrameworkImage } from './image'
/**
 * The interface by which {@link DataPlugin} {@link DisplayPlugin}instances can directly interact
 * with the game framework.
 */
interface ColorFramework {
  /**
     * query images and set them in the private variable
     */
  makeQuery: (keyword: string) => void


  /**
     * query images and set them in the private variable
     */
  getColorDensityChart: (image: FrameworkImage) => string
  
}

export { ColorFramework }
