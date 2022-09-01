function addUser() {
    var a = document.getElementById("player_score").value;

    a = 0;
    var input = localStorage.setItem("input", input)
    document.getElementById("1st_player").innerHTML = input + " : ";
}