i=0;
function addGuest() {
  if (i<3) {
    var guest1Name = document.getElementById('typeAnything1').value;
    var node = document.createElement("li");
    var textnode = document.createTextNode(guest1Name);
    var date1 = Date();
    document.getElementById("time").innerHTML = date1;
    node.appendChild(textnode);
    document.getElementById("r1List").appendChild(node);
  i++;
  }
  else {
    return;
  }
}

function removeGuest() {
  var x = document.getElementById("typeAnything2").value;
   var list1 = document.getElementById("r1List");
   list1.removeChild(list1.childNodes[x]);
    }
    
w=0;
function addGuest2() {
  if (w<3) {
    var guest2Name = document.getElementById('typeAnything3').value;
    var node2 = document.createElement("li");
    var textnode2 = document.createTextNode(guest2Name);
    var date2 = Date();
    document.getElementById("time").innerHTML = date2;
    node2.appendChild(textnode2);
    document.getElementById("r2List").appendChild(node2);
  w++;
  }
  else {
    return;
  }
}

function removeGuest2() {
  
  var y = document.getElementById("typeAnything4").value;
   var list2 = document.getElementById("r2List");
   list2.removeChild(list2.childNodes[y]);
    }

t=0;
function addGuest3() {
  if (t<3) {
    var guest3Name = document.getElementById('typeAnything5').value;
    var node3 = document.createElement("li");
    var textnode3 = document.createTextNode(guest3Name);
    var date3 = Date();
    document.getElementById("time").innerHTML = date3;
    node3.appendChild(textnode3);
    document.getElementById("r3List").appendChild(node3);
  t++;
  }
  else {
    return;
  }
}

function removeGuest3() {
  
  var v = document.getElementById("typeAnything6").value;
   var list3 = document.getElementById("r3List");
   list3.removeChild(list3.childNodes[v])
    }



//10/23 (fixed). Naming was wrong and needed a value for var x. Changed the r1List to list1.

//Have to define the 0 globally
//Take the value of the person and save it as a guest name
//Find the ordered list and create the element, li
//Create the text element and append it.
//4 rules


