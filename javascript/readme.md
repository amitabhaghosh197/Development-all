# Few writing formats in javascript
## 1. Ternary Operator

 Details  

```
var direction;
if(x < 200){
direction = 1;
}
else
{
direction = ?1;
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
