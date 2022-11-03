// https://www.thecolorapi.com/docs#schemes check here the words in red point to why some
// of these consts were included in this function
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
// in the 'color-palette div' 
function getColorScheme() {
    //seedColor.value = an html id of seedColor and then value is supplied by the color picker
    // mode.value = an html id of mode and then value is supplied by the values that are inside of the option tags
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${mode.value}&count=${count}`)
        .then((res) => res.json())
        .then((newColor) => {
            let html = "" // need these both set to empty strings so they can be populated below
            let codes = ""
            for(let i = 0; i < 5; i++) {
                // this is the html we want to return in the colorPalette div 
                // it adds / returns 5 colors based of the selected scheme
                // iterating through 5 values with the for loop
                // the css dictates how the 5 colors are presented (big main section)
                // here we get hex values and display them as actual colors
                // the id and class inside of the template literal are selectors for styling purposes 
                html += `
                    <div id="colorColumn" class="colorPalette column" style="background-color: ${newColor.colors[i].hex.value}">
                    </div>
                    `
                // here we get hex values and display them as actual values inside of a p tag
                codes += `
                <div><p>${newColor.colors[i].hex.value}</p></div>
            `            
        }
        //inject color palette into html to display
        colorPalette.innerHTML = html

        //inject hex values for html to display
        hexValues.innerHTML = codes 
    })
}
getColorScheme()




