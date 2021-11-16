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

The file explorer is accessible using the button in left corner of the navigation bar. You can create a new file by clicking the **New file** button in the file explorer. You can also create folders by clicking the **New folder** button.

## Project Structure
.
└─ core									# core of files of the framework
│   └──  framework.ts			# the interface of the framework
│   └──  frameworkimpl.ts	# implementation of the framework interface
│   └──  dataplugin.ts			# interface for data plugins
│   └──	 displayplugin.ts		# interface for display plugins
└─ plugins								# different implementations for the plugins
│   └──  dataplugin				# directory for implementations of the data plugin interface
│   └──  displayplugin			# directory for implementation of the display plugin interface
└─ pluginloader.ts				# an async function that takes in paths of the two different plugins; loads them to the framework
└─ ui.ts									# ui of the framework


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