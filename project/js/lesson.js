//TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector(".tab_content_items")
let index = 0

const hideTabContent = () => {
   tabContent.forEach((content) => {
    content.style.display = 'none'
   })
   tabs.forEach((tab) => {
       tab.classList.remove('tab_content_item_active')
   })
}

const showTabContent = (index = 0) => {
 tabContent[index].style.display = 'block'
 tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabs.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab,tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

autoSlider(index)



//converter

const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const eurInput = document.querySelector("#eur")


const converter = (element,targetElement,secondtargetElement,current) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET','../data/converter.json')
        request.setRequestHeader('COntent-type','application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    secondtargetElement.value = (element.value / data.eur).toFixed(2)
                    break;
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    secondtargetElement.value = (targetElement.value / data.eur).toFixed(2)
                    break;
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    secondtargetElement.value = (targetElement.value / data.usd).toFixed(2)                    
                default:
                    break;
            }
            
            if (element.value ==='') {
                targetElement.value = ''
                secondtargetElement.value = ''
            }

        }
    }
}

converter(somInput,usdInput,eurInput,'som')
converter(usdInput,somInput,eurInput,'usd')
converter(eurInput,somInput,usdInput,'eur')











//card switcher

const cardBlock = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1



const Fetch = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(response => response.json())
    .then(data => {
        cardBlock.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
    `
    })
}


btnNext.onclick = () => {
    count = (count === 200) ? 1 : count + 1
Fetch()
}

btnPrev.onclick = () => {
    count = (count === 1) ? 200 : count - 1
    Fetch()
}


Fetch()


fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response => response.json())
.then(data => { console.log(data);})



