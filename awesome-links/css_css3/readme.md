
# CSS
## How to center an image in a thumbnail 

There are two ways :

```
/* Process 1 */
.item-wrapper{
  position: relative;
  display: inline-block;
  overflow:hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-size: cover;
  background-position: center center;
  /*background:#fff;*/
}

.item-wrapper > img{
  position: absolute;
  max-width: 100%;
  vertical-align: middle;
  left: 50%;
  top: 50%;
  transform : translate(-50%,-50%);
  /*height: 200px*/
  margin-top:-2px;
  
}

/* Process 2  */

.item-wrap-2{
  position: relative;
  display: inline-block;
  overflow:hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  
}

```

Link

http://jsfiddle.net/amitabhaghosh197/g7pasp37/7/

http://stackoverflow.com/questions/26681059/create-a-circle-avatar-from-a-rectangle-image-keeping-proportions-and-just-using

http://stackoverflow.com/questions/16310918/css-scale-and-square-center-crop-image

http://stackoverflow.com/questions/11552380/how-to-automatically-crop-and-center-an-image