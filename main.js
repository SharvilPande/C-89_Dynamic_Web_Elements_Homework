remember_name = "";

function rememberMe() {
    remember_name=document.getElementById("input_1").value;
    localStorage.setItem("player 1 key", remember_name);
}

remember_name_2 = "";

function rememberMe2() {
    remember_name_2=document.getElementById("input_2").value;
    localStorage.setItem("player 2 key", remember_name_2);
}



