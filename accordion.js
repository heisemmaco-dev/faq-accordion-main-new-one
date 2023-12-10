let accordion = document.querySelectorAll('.acccordion_container')
let inter = document.querySelectorAll('.bin1')
let inter2 = document.querySelectorAll('.bin2')

accordion.forEach((item, index) => {


    item.addEventListener('click', () => {

    let itemcontain = item.classList.contains('active')
    accordion.forEach(letme => { 
        letme.classList.remove('active')
        let hi = letme.querySelector('.bin1')
        hi.style.display = 'initial'
    })
    inter[index].style.display = 'none'
    inter2.forEach(me => {
        me.style.display = 'none'
    })
    

    if (!itemcontain) {
        item.classList.toggle('active')
        inter2[index].style.display = 'initial'
    } else {
        inter.forEach(we => {
            we.style.display = 'initial'
        })
    }

    })
   
})