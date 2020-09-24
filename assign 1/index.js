var text= document.getElementById('textcounts');
var count= document.getElementById('count');
text.addEventListener('keyup',function(){
    var counts= text.value.length;;
    count.innerHTML=counts

});
