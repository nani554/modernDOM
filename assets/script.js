// prints out a document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title= "what the fuck motherfuckers";
// console.log(document.doctype);
// console.log(document.head);
// console.dir(document.body);
// console.log(document.all);
// document.all[8].textContent = "what the fuck mother fuckers";
// console.dir(document.getElementById('img'));
// console.dir(document.querySelector('div'));


// var odd = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//   odd[i].style.backgroundColor = "blue"  
// }


//parentNode
var papaElement = document.querySelector('#papa');
// console.dir(papaElement);
// console.log(papaElement.parentNode);
// papaElement.parentNode.style.backgroundColor = 'pink';

//childNode , firstElementChild
// console.log(papaElement.children);
// console.log(papaElement.firstChild);
// console.log(papaElement.firstElementChild);

// papaElement.firstElementChild.textContent = " kya be madarchod";

//childNode , lastElementChild
// console.log(papaElement.children);
// console.log(papaElement.lastChild);
// console.log(papaElement.lastElementChild);

// papaElement.lastElementChild.textContent = " kya be madarchod";


//nextSibling
// console.log(papaElement.nextSibling);
// console.log(papaElement.nextElementSibling);

// papaElement.nextElementSibling.textContent = " kya be madarchod";


// var newBlog = document.createElement('h3');
// newBlog.className= 'myClass';
// newBlog.id = "myid";
// newBlog.setAttribute('title','my dear fellows');
// var txt = document.createTextNode('iam h2 but iam wearing h3');
// newBlog.appendChild(txt);
// document.body.appendChild(newBlog);
// console.log(newBlog);



// Events

var button = document.querySelector('button');
button.addEventListener('click',funnyfunc);
function funnyfunc(e){
	// console.log(e);
	// console.log(e.target);
	// console.log(e.target.className);
	console.log(e);	

}

// var para = document.querySelector('.myBloodyClass');
var dir = document.getElementById('myScale');

// para.addEventListener('mousemove',itsafunc);

// function itsafunc(e){
// 	console.log(e.offsetX+" "+e.offsetY+" "+(e.offsetX + e.offsetY));
// 	dir.innerHTML = 'Position x- '+e.offsetX +" y-"+e.offsetY;
// 	document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX - e.offsetY})`;
// }

var inp = document.querySelector('input[type="text"]');
// inp.addEventListener('keyup',keyfunc);
// inp.addEventListener('focus',keyfunc);
inp.addEventListener('paste',keyfunc);

function keyfunc(e){
	// console.log(e);
	// dir.innerHTML = `${e.target.value}`;
}