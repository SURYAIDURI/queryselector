var thirditem = document.querySelector('li:nth-child(thirditem)')
for(var i = 0; i < thirditem.clientHeight; i++){
    thirditem[i].style.backgroundColor = 'green';
    
}
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i <  odd.length; i++){
    odd[i].style.backgroundColor= 'green'
}
// querySelector() methodcan only be used to access a single element while querySelectorAll() method can be used to access all elements which match with a specified CSS selector