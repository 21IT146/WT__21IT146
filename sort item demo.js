(function () {
    document.querySelector('#add').addEventListener('click', function () {
      let input = document.querySelector('#text');
      let list = document.querySelector('#list'); 
      
      let item = document.createElement('li'); 
      let itemText = document.createTextNode(input.value); 
      
      item.appendChild(itemText); 
      list.appendChild(item);
      
      input.value = "";
    });
  })();
  
  let globalList, temp = [], sorted = true;

  document.getElementById("sort").addEventListener('click', sortList);
  document.getElementById("unsorted").addEventListener('click', UnsortedList);

  function UnsortedList() {
    let currentList = document.getElementById("countries");
    currentList.innerHTML = '';
    temp.forEach(function (item) {
      let li = document.createElement('li');
      currentList.appendChild(li);
      li.innerHTML += item;
    });
    sorted = true;
  }

  function getTempArray(pList) {
    globalList = pList.getElementsByTagName("li");
    temp = [];
    for (let j = 0; j < globalList.length; j++) {
      temp.push(globalList[j].innerText);
    }
  }

  function sortList() {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById("countries");

    if (sorted === true) {
      getTempArray(list);
      sorted = false;
    }

    switching = true;

    while (switching) {
      switching = false;
      b = list.getElementsByTagName("li");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
