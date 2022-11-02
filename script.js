// taking control of elements by id based on URI parameters set by the color api
const mode = document.getElementById('mode') // list color schemes aka color mode defines mode by which to generate the scheme from seed color
const seedColor = document.getElementById('seedColor') // starting color aka seed color
const hexValues = document.getElementById('hexValues') // hex value to be returned as string
const colorPalette = document.getElementById('colors') // where the color will be displayed
const count = 5 // number of colors to return

// button that takes a function called getColorScheme
document.querySelector('button').addEventListener('click', getColorScheme)


// the function will fetch the colors api
// and it will display the the color scheme
// in the 'color-palette dive' 
function getColorScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex${seedColor.value.slice(1)}&mode=${mode.value}&count=${count}`)
        .then((res) => res.json())
        .then((newColor) => {
            let html = '' // need these both set to empty strings so they can be populated below
            let codes = ''
            for(let i = 0; i < 5; i++) {
                html += `
                    <div id="colorColumn" class="colorPalette column" style="background-color: ${newColor.colors[i].hex.value}" title=${newColor.colors[i].hex.value}>
                        <p class="columnCode" style="visibility: hidden">${newColor.colors[i].hex.value}
                        </p>
                    </div>
                    `
            codes += `
                <div><p>${newColor.colors[i].hex.value}</p></div>
            `            
        }

        colorPalette.innerHTML = html
        hexValues.innerHTML = codes 
    })

}

getColorScheme()






// document.querySelector('button').addEventListener('click', function(){
//     // console.log("batch")
//     fetch('https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6')
//     .then((res) => res.json())
//     .then(data => console.log(data))
// })

// const colors = {
//     method: "GET",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }


