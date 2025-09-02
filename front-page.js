let wrapper = document.getElementById("wrapper")

fetch("data/destinations.json")
    .then(res => res.json())
    .then(data => handleDestinations(data))

function handleDestinations(data) {
    console.log(data);
    let first


    let grid = /*HTML*/
    `
    <div id="grid"></div>
    `
    data.destinations.forEach((dest, i) => {
        first = /*HTML */
        `  
            <div class="parent appartment-${i+1}">
                <img class="thumbnails" src="/img/${data.destinations[i].image}">
                <div class="bottom">
                    <img class="svg" src="/img/black-heart.svg">
                    <a href="info.html?id=${i+1}" target="_blank">MORE</a>
                </div>
            </div>
            
        `
        wrapper.insertAdjacentHTML("beforeend", grid)
        let grid2 = wrapper.querySelector("#grid")
        grid2.insertAdjacentHTML("beforeend", first)

    })
}