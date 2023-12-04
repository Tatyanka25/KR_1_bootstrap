let form = document.getElementById("UserEnter")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    var date = document.getElementById("date").value;
    const dateShow = document.getElementById("dateShow");
    dateShow.innerHTML = date;

    var name = document.getElementById("name").value;
    const nameShow = document.getElementById("nameShow");
    nameShow.innerHTML = name;

    const data = new FormData(form);
    const costShow = document.getElementById("costShow");
    costShow.innerHTML = data.get("place_2");
})