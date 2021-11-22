import { Image } from './image'
/**
 * The interface by which {@link DataPlugin} {@link DisplayPlugin}instances can directly interact
 * with the game framework.
 */
interface ColorFramework {
  /**
     * Get the name of the player that currently has the move.
     */
  makeQuery: (keyword: string, numImage: number) => void
  
}

export { ColorFramework }
