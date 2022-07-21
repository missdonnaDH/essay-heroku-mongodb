function run() {
    fetch("/api/movie")
        .then((response) => response.json())
        .then((data) => {
            const detailsElement = document.getElementById("movie");

            detailsElement.getElementsByTagName("h1")[0].innerText = data.nom;
            detailsElement.getElementsByTagName("p")[0].innerText = data.age;

            detailsElement.style.visibility = "visible";
        });
}
