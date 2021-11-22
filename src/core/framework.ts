import { Image } from './image'
/**
 * The interface by which {@link DataPlugin} {@link DisplayPlugin}instances can directly interact
 * with the game framework.
 */
interface ColorFramework {
  /**
     * query images and set them in the private variable
     */
  makeQuery: (keyword: string, numImage: number) => void
  
}

export { ColorFramework }
