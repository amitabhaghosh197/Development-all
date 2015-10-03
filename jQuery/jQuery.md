
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
By passing jQuery to a function that defines the parameter as $, $ is guaranteed to reference
jQuery within the body of the function.
We can now happily use $ to our heart’s content in the definition of the plugin.

