# Few writing formats in javascript As from Smashing EBOOK JAVSCRIPT ESSENTIALS

## 1. Ternary Operator

 Details  

```
var direction;
if(x < 200){
direction = 1;
}
else
{
direction = -1;
}
```
 Write to this 
```
var direction = x < 200 ? 1 : -1;
```
## 2. JSON

```
<div id="delicious"></div>
<script>
function delicious(o){
var out = '<ul>';
  for(var i=0;i<o.length;i++){
  out += '<li><a href="'+ o[i].u + '">' +
           o[i].d + '</a></li>';
   }
  out += '</ul>';
document.getElementById('delicious').innerHTML = out;
  }
</script>
<script src="http://feeds.delicious.com/v2/json/codepo8/javascript? count=15&callback=delicious "></script>
```
### 3. Anonymous Functions And the Module Pattern

One of the most annoying things about JavaScript is that it has no scope for
variables. Any variable, function, array or object you define that is not inside
another function is global, which means that other scripts on the same page
can access—and will usually override— them.

The workaround is to encapsulate your variables in an anonymous function
and call that function immediately after you define it. For example, the
following definition would result in three global variables and two global
functions:

```
 var name = 'Chris';
var age = '34';
var status = 'single';
function createMember(){
//
[...]
}
function getMemberDetails(){
//
[...]
}
```
###### Better Workarounds > 

Any other script on the page that has a variable named status could cause
trouble. If we wrap all of this in a name such as myApplication, then we
work around that issue:

```
 var myApplication =
function(){
var name = 'Chris';
var age = '34';
var status = 'single';
function createMember(){
//
[...]
}
function getMemberDetails(){
//
[...]
}
}();
```

If you need to make some of the things reachable to the outside, then you
need to change this. In order to reach createMember() or getMemberDetails(), you need to return them to the outside world to
make them properties of myApplication:
```
var myApplication = function(){
var name = 'Chris';
var age = '34';
var status = 'single';

return{
   createMember:function(){
  //
   [...]
 },
   getMemberDetails:function(){
  //
  [...]
 }
 }
 }();
//
myApplication.createMember() and
//
myApplication.getMemberDetails() now works.
```
This is called a module pattern or singleton. It was mentioned a lot by Douglas Crockford and is used very much in the Yahoo User Interface Library YUI.


######The Other Way
```
var myApplication = function(){
var name = 'Chris';
var age = '34';
var status = 'single';
function createMember(){
//
[...]
}
function getMemberDetails(){
//
[...]
}
return{
 create:createMember,
 get:getMemberDetails
}
}();
//myApplication.get() and myApplication.create() now work.
```

### 4. Namespacing Pattern

A better pattern
would take advantage of boolean conversion with an inner variable
declaration, as follows:
```
if
(!MyNamespace)
{
var MyNamespace = {};
}

//or [ a more efficient way of doing this]
var myNamespace = myNamespace || {};

//or
if
( typeof MyNamespace == 'undefined' ) {
var MyNamespace = {};
}
```
### 5. A good defensive coding practice is to unbind an event handler before binding, like so:
```
 var handleClick = function()
{
    // Do some stuff
};

var init = function()
{
    $("a.some-link").unbind(handleClick).click(handleClick);
};
```



* User/Repository: https://github.com/stevekwan/best-practices


### 6. Why we use return false in jQuery function

```
$(function() {
    $("body a").click(function() {
        alert(this.innerHTML);
        return false;
    });
});
```

Read this question:


http://stackoverflow.com/questions/5927689/when-should-i-use-return-false-in-jquery-function

### 7. Free-standing JavaScript (i.e. JavaScript that does not run inside

a function) operates within the global scope of the window object, to which

everything has access; whereas local variables declared inside functions are

accessible only within that function, not outside.

```
 var animal = 'dog';
 function getAnimal(adjective){
  alert(adjective+ this.animal);
  };

 getAnimal('lovely'); // alerts 'lovely dog'
```

Here, our variable and function are both declared in the global scope (i.e. on
window). Because this always points to the current scope, in this example it
points to window.
In a browser the page object is the browser window. The function above automatically becomes a window function.

```
var animal  = 'dog';
function getAnimal(adjective)
{ alert(adjective+''+this.animal);
};
var myObj = {animal:'camel'};
getAnimal.call(myObj,'lovely'); //alerts 'lovely camel'

Here, our function runs not on window but on myObj — specified as the first
argument of the call method. Essentially, call() pretends that our function
is a method of myObj (if this doesn’t make sense, you might want to read up
on JavaScript’s system of prototypal inheritance). Note also that any
arguments we pass to call() after the first will be passed on to our
function — hence we’re passing in lovely as our adjective argument.

Read : http://www.w3schools.com/js/js_function_invocation.asp
