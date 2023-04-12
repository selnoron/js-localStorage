const text = document.querySelector('.i1')
const col = document.querySelector('.i2')
const font = document.querySelector('.ff')
const size = document.querySelector('.size')
const ch_t = document.querySelector('.tex')
const but = document.querySelector('.b1')

function inpToLocal() {
    localStorage.setItem('text', text.value)
    if (font.value == "Arial") {
        localStorage.setItem('font', 'Arial, Helvetica, sans-serif')
    }
    if (font.value == "OpenSans") {
        localStorage.setItem('font', "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif'")
    }
    if (font.value == "Times New Roman") {
        localStorage.setItem('font', "'Times New Roman', Times, serif")
    }
    localStorage.setItem('size', size.value)
    localStorage.setItem('color', col.value)
    ch_t.style.color = `${localStorage.getItem('color')}`
    ch_t.style.fontSize = `${localStorage.getItem('size')}px`
    ch_t.style.fontFamily = `${localStorage.getItem('font')}`
    ch_t.innerHTML = `${localStorage.getItem('text')}`
}

ch_t.style.color = `${localStorage.getItem('color')}`
ch_t.style.fontSize = `${localStorage.getItem('size')}px`
ch_t.style.fontFamily = `${localStorage.getItem('font')}`
ch_t.innerHTML = `${localStorage.getItem('text')}`

but.addEventListener('click', inpToLocal)
