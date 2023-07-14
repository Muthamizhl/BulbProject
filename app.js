function change()
{
    var img =document.getElementById("bulb");

if(img.src.match("on"))
{
  img.src="./assests/off.jpg";
}
else
{
   img.src="./assests/on.jpeg";
}
}