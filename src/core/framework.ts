import { FrameworkImage } from './frameworkimage'
/**
 * The interface by which {@link DataPlugin} {@link DisplayPlugin}instances can directly interact
 * with the game framework.
 */
interface ColorFramework {
  /**
     * query images and set them in the private variable
     */
  makeQuery: (keyword: string) => Promise<void>


  /**
     * query images and set them in the private variable
     */
  getColorDensityChart: () => void
  
}

export { ColorFramework }
