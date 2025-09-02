fetch("data/destinations.json")
    .then(res => res.json())
    .then(data => handleDestinations(data))

function handleDestinations(data) {
    console.log(data);
    let first

    data.destinations.forEach((dest, i) => {
        first = `
            <div class="parent appartment-${i+1}">
                <img class="thumbnails" src="/img/${data.destinations[i].image}">
                <div class="bottom">
                    <img class="svg" src="/img/black-heart.svg">
                    <a href="info.html?id=${i+1}" target="_blank">MORE</a>
                </div>
            </div>
        `

        document.getElementById("grid").insertAdjacentHTML("beforeend", first)

    })
}