# Color Analysis Framework 
Our framework allows you to implement your own data plugin, or display plugin, to visualize colors of an image. 

Current data plugins are 
- SERP API
- Pexels API
- Unsplash API

Current display plugins are
- word cloud
- histogram
- pie chart

## How to Implement Your Own Data Plugin
Data plugin interface has two methods: **getDataPluginName** and **queryImage**. 

**getDataPluginName** does not take any argument, and returns the name of your plugin. 

**queryImage** takes one argument. The argument serves as a keyword for API query. For example, if we put 'banana' as a keyword, our data plugins will retrieve photos related to the keyword and create a new object of the class, **FrameworkImage**. And it will return the object. 

### What is FrameworkImage?
This class contains various information of a given image. Its constructor requires 4 arguments.
- name: string
- height: number
- width: number
- imageUrl: string

You can make new FrameworkImage class, if you have all those 4 arugments. Then, you just need to return it as an output of **queryImage**. 

## How to Implement Your Own Display Plugin
specs are mentioned in comments as well.
#### Data Plugin
- getDataPluginName: () => string
- - this returns the name of the plugin

- queryImage: (keyword: string) => Promise<FrameworkImage>
- - this querys an image with the keyword param. it returns a promise that returns an image. if an error occurs, it returns an image with the name of the error

#### Display Plugin
- getChart: (image: FrameworkImage) => string
- - gets the chart @param image color density values as html string
- onRegister: (framework: ColorFramework) => void
- - Called (only once) when the plug-in is first registered with the framework, giving the plug-in a chance to perform any initial set-up such as loading the javascript
- getDisplayPluginName: () => string
- - returns the name of the string


## How to use GUI
1. first choose a data plugin.
2. type in a keyword you want to see and press submit.
3. see that the image has loaded. if not, press refresh until it does show
4. choose a display plugin
5. see that the do analysis button exsists
6. press that button to see the analysis chart
7. if it does not load, refresh up to 10 times, until it does.

