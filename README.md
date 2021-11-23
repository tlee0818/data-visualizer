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