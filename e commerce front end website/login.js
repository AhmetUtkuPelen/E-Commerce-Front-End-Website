// !! NAVBAR İKON VE LİSTELERİ SANDVİÇ MENU İÇİN SEÇİM YAPIYORUM !! \\

const menuIcon = document.querySelector('.ikon')

const menu = document.querySelector('.liste')

const nav = document.querySelector('.navigasyon')

// !!! DARK MODE LIGHT MODE !!! \\

const renkdegis = document.getElementById('toggleDark')

const body = document.querySelector('body')



//  NAVBAR İKON KOD KISMI \\


menuIcon.addEventListener('click', (e) => {

    e.currentTarget.classList.toggle('fa-bars')

    e.currentTarget.classList.toggle('fa-x')

    menu.classList.toggle('navi-goster')

    
})

window.addEventListener('resize',(e) =>{

    if (window.innerWidth > 992){

    menuIcon.classList.add('fa-bars')

    menuIcon.classList.remove('fa-x')

    menu.classList.remove('navi-goster')

    }

})


document.body.addEventListener('click', (e) => {

    if(!e.target.matches('.navigasyon') && !e.target.matches('.ikon')){


        menuIcon.classList.add('fa-bars')

        menuIcon.classList.remove('fa-x')
    
        menu.classList.remove('navi-goster')


    }

})



//  DARK LIGHT MODE KOD KISMI \\




renkdegis.addEventListener('click', function(){

    this.classList.toggle('bi-moon')


    if(this.classList.toggle(bi-emoji-sunglasses)){

        body.style.background ='linear-gradient(to left, lightblue , white , lightblue , white , lightblue)'

    }else{

        body.style.background ='black'

    }

})


// ! LOCAL STORAGE YAZMA KISMI ! \\



// document.getElementById('butongiris').addEventListener('click' , function(){

//     window.localStorage.setItem('girisBilgisi' , 'AUP')

//     JSON.stringify({girisBilgisi: 'AUP', sifre : 123456})

//     JSON.parse()

// })