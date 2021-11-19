import { ColorFramework } from './framework'

/**
 * The game plug-in interface that plug-ins use to implement and register games
 * with the {@link VisualFramework}.  The type parameter, allows an
 * arbitrary type to represent a player.
 */
interface DataPlugin {

  /**
     * Gets the name of the plug-in game.
     */
  processJson: () => Image[]

  queryImage: (keyword: String, numImage: number) => void
}

export { DataPlugin }
