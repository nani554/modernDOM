var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter');

// On form submit
form.addEventListener('submit',function(e){
    e.preventDefault(); // preventing normal form submmission so that machine runs this code before submitting

    // Get input value
    var newItem = document.getElementById('item').value;
    console.log(newItem);
    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = "list-group-item";

    // Create del button element
    var delBtn = document.createElement('button');
    delBtn.className = "btn btn-danger btn-sm float-right delete"

    // Append text Node
    delBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(delBtn);
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    itemList.appendChild(li);

   document.getElementById('item').value = "";// Emptying input value after submitting
});

// Delete item
itemList.addEventListener('click',removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        // want to click on only button thats y removing li inside if condition which evaluates for button
        if(confirm('Are you sure!')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filter items

filter.addEventListener('keyup',function(e){
    // Converting it to lowercase
    var text = e.target.value.toLowerCase();

    // Accessing list items
    var items = itemList.getElementsByTagName('li');

    // Convert to an array

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
});


