
# jQuery Function Guide  
## The approach from Manning.Jquery In Action Ebook 
` Though this function is the style of jQuery Plugin but--- `
```
(function($){
//
// Plugin definition goes here
//
})(jQuery);
```
> [example](../jQuery/demos/function/) 


By passing jQuery to a function that defines the parameter as `$`, `$` is guaranteed to reference
jQuery within the body of the function.
We can now happily use $ to our heart’s content in the definition of the plugin.

## Plugin Style

* Reff. Links:

1. http://learn.jquery.com/plugins/basic-plugin-creation/

2. http://stackoverflow.com/questions/12093192/how-to-create-a-jquery-function-create-a-new-jquery-method-or-plugin


```
$.fn.greenify = function() {
    this.css( "color", "green" );
    return this;
}
 
$( "a" ).greenify().addClass( "greenified" );
```



