# Color Analysis Framework: Design Document

## Domain

The idea is to perform color analysis on different images. The framework analyzes given images from different sources, provided by data plugins, and shows results in different ways, using visualization plugins. The framework is constructed to provide benefits for reuse. Users can provide a new data plugin or visualization plugin to fully reuse the framework.
 
For the framework, we use the Color Detector Tool from Clarifai. Given an image, the tool examines the dominant colors in the image and returns density values for those colors. Since the returned values are in hex format, we can represent colors in a more specific way as we visualize the outputs. 
 
Data plugins can provide a list of text fragments with corresponding time stamps.
All data plugins take queries and provide corresponding images in JSON format.
Data plugins  include:
- Unsplash Developers API (Unsplash images)
- Pexels API (Pexels images)
- Serp API (Google images)
 
The framework can provide a list of colors in images to visualization plugins.
- Word cloud: provides the top 10 dominant colors in images queried by the user (a.k.a. "color contents") as words, proportional to its density in the image.
- Histogram
	- This plugin visualizes the color contents in a histogram form. 
- Pie Chart
	- This plugin visualizes the color contents in a pie chart form. 
- Image cloud
	- this plugin provides the top 10 images with the highest density values (color contents) corresponding to a certain keyword. 


## Generality vs Specificity

We have designed a framework that is reusable and specific in scope, while allowing for many different plugins. Firstly, we made the decision to focus only on the Color Detection Model accessible with the Clarifai API. We could have increased our functionality to include more models, like the Food model and the General model, but we thought that analyzing the colors in an image/a group of images and providing a GUI to display visualizations was useful enough to focus more heavily on. This allows us to provide reuse in a more specific space, instead of having to make decisions about many different models that all have different inputs and outputs.

For data plugins, we are going to require the plugin developer to provide a function that outputs a standardized JSON file that will be read by the framework. The JSON will include the image source URL, dimensions, and file type, and will have some required specifications. Basically, it is up to the developer to use an API or other method to grab images from a source and create the JSONs that the framework can use. The plugin will also have to take user input from the GUI/framework, in the form of a search keyword and # of images. The reuse available is the fact that every developer will provide the same information to the framework in the same structure, and there will be a standard interface to take in information from the GUI.

The plugin loader will take in information about the data plugins, mainly the name that the plugin developer wants to have in the GUI. The GUI will allow a user to pick between any of the data plugins loaded, and no matter which plugin is chosen the user will input a search keyword and # of images. This keeps the user experience cohesive and allows reuse.

The framework provides the GUI where display plugins will be able to show whatever visualizations the plugin developers want. Firstly, the user will interact with a slideshow display of the images that the data plugin loaded in. Once an image and a visualization is selected, the plugin will have to provide an HTML file of the visualization that fits the specifications the framework provides, which will then be displayed by the GUI. This provides a lot of reuse and functionality as the visualization will display correctly as long as the HTML file provided by the plugin fits the specifications given (based on implementation of the GUI).

## Project Structure
.
└─ core							# core of files of the framework
│   └──  framework.ts			# the interface of the framework
│   └──  frameworkimpl.ts	    # implementation of the framework interface
│   └──  dataplugin.ts			# interface for data plugins
│   └──	 displayplugin.ts		# interface for display plugins
└─ plugins						# different implementations for the plugins
│   └──  dataplugin				# directory for implementations of the data plugin interface
│   └──  displayplugin			# directory for implementation of the display plugin interface
└─ pluginloader.ts				# an async function that takes in paths of the two different plugins; loads them to the framework
└─ ui.ts						# ui of the framework


## Plugins
Plugins are divided into data plugins (how the framework receives the images) and display plugins (how the framework displays information generated from input images)

### dataPlugin interface
- **processJson**(s: String)
	- parameter: string of JSON object returned from API call to get images.
	- return: a string of a JSON object that is formatted so it can be fed into Clarifai's ML model in the framework

- **getInputMessage**()
	- parameter: none
	- return: a string that will be displayed to the user when they're querying images through the framework

### displayPlugin interface
- **makeCharts**(s: String, fHeight, fWidth)
	- parameter: string of JSON object returned from Clarifai API call, height and width of frame for charts
	- return: an array of JSON documents containing HTML strings of the graph and its corresponding picture ID