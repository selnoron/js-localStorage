const text = document.querySelector('.i1')
const but = document.querySelector('.b1')
const di1 = document.querySelector('.di1')

const glob = document.createElement('div')
const tex = document.createElement('div')
const comp = document.createElement('div')
const del = document.createElement('div')

if (localStorage.getItem('count')==undefined) {
    localStorage.setItem('count', 0)
}
let cnt = localStorage.getItem('count')


glob.style.cssText = 'border: 1px solid black;width: 100%;display: flex;flex-direction: row;justify-content: space-between;box-sizing: border-box;'
tex.style.cssText = 'width: 80%;'
comp.style.cssText = 'width: 10%;height: 100%;border-right: 1px solid black;text-align: center;'
del.style.cssText = 'width: 10%;height: 100%;border-right: 1px solid black;text-align: center;'

function addDo() {
    localStorage.setItem(`${localStorage.getItem('count')}`, JSON.stringify(
        {'text': text.value, 
        'comp': false, 
        'del': false})
    )
    
    tex.innerHTML = JSON.parse(localStorage.getItem(`${cnt}`))['text']
    comp.innerHTML = '✓'
    comp.addEventListener('click', () => {
        cur = JSON.parse(localStorage.getItem(`${cnt}`))
        console.log(cur[comp])
        if (cur[comp] == false) {
            cur[comp] = true
            tex.style.backgroundColor = 'green'
            localStorage.setItem(`${cnt}`, JSON.stringify(cur))
        }
        
    })
    del.innerHTML = '✘'
    glob.append(comp)
    glob.append(del)
    glob.append(tex)
    di1.append(glob)
    cnt = parseInt(localStorage.getItem('count')) + 1
    localStorage.setItem('count', cnt)
}

function complete() {
    cur = JSON.parse(localStorage.getItem(`${id}`))
    cur[comp] = true
    localStorage.setItem(`${id}`, JSON.stringify(cur))
}

for (let i = 0; i < localStorage.length - 1; i++) {
    if (localStorage[i] != 'count') {
        tex.innerHTML = JSON.parse(localStorage[i])['text']
    comp.innerHTML = '✓'
    comp.addEventListener('click', (i) => {
        cur = JSON.parse(localStorage.getItem(localStorage[i]))
        console.log(cur[comp])
        if (cur[comp] == false) {
            cur[comp] = true
            tex.style.backgroundColor = 'green'
            localStorage.setItem(`${i}`, JSON.stringify(cur))
        }
        
    })
    del.innerHTML = '✘'
    glob.append(comp)
    glob.append(del)
    glob.append(tex)
    di1.append(glob)
    }
}



but.addEventListener('click', addDo)