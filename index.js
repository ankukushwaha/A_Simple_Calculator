var str = "";
for(var i=0;i<16;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonClick = this.innerHTML;
        insert(buttonClick);
    });
}

function insert(key) {
    switch (key) {
        case "=":
            str = eval(str);
            document.querySelector("input").value = str;
            break;
        case "C":
            str = "";
            document.querySelector("input").value = str;
            break;
        case key:
            str = str+key;
            document.querySelector("input").value = str;
            break;
        default:
            break;
    }
}