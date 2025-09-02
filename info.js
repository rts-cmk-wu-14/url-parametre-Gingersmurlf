const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)

let id = params.get("id")

fetch(`data/${id}.json`)
    .then(res => res.json())
    .then(data => handleDestinations(data));

function handleDestinations(data) {
    console.log(data);
    let first

    first = /*html */
    `
        <div class="image-container"><img class="thumbnail" src="/img/${data.image}">
        
        </div>
        <div class="content">
            <h2>${data.destination}</h2>
            <h1>${data.title}</h1>
            <h3>${data.subtitle}</h3>
            <p>${data.text}</p>
            <div class="list">
                <h4>Faciliteter</h4>
                <ul>
                    ${data.facilities.map((ting) => `<li>${ting}</li>`).join("")}
                </ul>
            </div>
            
        </div>
        `

    document.getElementById("wrapper").insertAdjacentHTML("beforeend", first)

}