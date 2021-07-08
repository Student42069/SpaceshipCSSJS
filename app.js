document.getElementById("unlock").addEventListener("click", function() {
    if (document.getElementById("password").value == "TrustNo1") {
        let myList = document.querySelectorAll(".checkbox");
        for (let i =0; i<myList.length; i++) {
            myList[i].removeAttribute('disabled');
        }
        let myList2 = document.querySelectorAll(".levers");
        for (let i =0; i<myList2.length; i++) {
            myList2[i].removeAttribute('disabled');
        }
        
    }
})

function check() {
    let myList = document.querySelectorAll(".checkbox");
    let myList2 = document.querySelectorAll(".levers");
    let counter = 0;
    for (let i =0; i<myList.length; i++) {
        if (myList[i].checked) {
            counter += 1;
        }
    }
    for (let i =0; i<myList2.length; i++) {
        if (myList2[i].value == 100) {
            counter += 1;
        }
    }
    if (counter == 11) {
        console.log("yeeeeaaaa");
        document.getElementById("launch").removeAttribute("disabled");
    } else {
        document.getElementById("launch").setAttribute("disabled", "true");
    }
}

document.getElementById("launch").addEventListener("click", function() {
    let id = null;
    const elem = document.querySelector(".rocket");
    let pos = 280;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 780) {
        clearInterval(id);
      } else {
        pos += 5;
        elem.style.left = pos + 'px';
        elem.style.bottom = pos + 'px';
      }
    }
});