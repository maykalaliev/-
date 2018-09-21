var open = document.getElementById('openmenu');
var menu =  document.getElementById('menus');
console.log(open);
console.log(menu);

var openmenus = function() { 
 open.classList.add('close');   
 open.classList.remove('open')
 menu.style.display = 'flex';
}


var close = document.getElementById('openmenu'); 

var closemenus =  function() { 
 open.classList.add('open');
 open.classList.remove('close');    
 menu.style.display = 'none';
}