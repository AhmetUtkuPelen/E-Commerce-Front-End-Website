// !! NAVBAR İKON VE LİSTELERİ SANDVİÇ MENU İÇİN SEÇİM YAPIYORUM !! \\

const menuIcon = document.querySelector('.ikon')

const menu = document.querySelector('.liste')

const nav = document.querySelector('.navigasyon')

// !!! DARK MODE LIGHT MODE !!! \\

const renkdegis = document.getElementById('toggleDark')

const body = document.querySelector('main')



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


    if(this.classList.toggle('bi-emoji-sunglasses')){

        body.style.background ='linear-gradient(to left, lightblue , white , lightblue , white , lightblue)'

    }else{

        body.style.background ='darkgray'

    }

})





// ! ÜRÜN EKLEYİP SEPETE GÖNDERME FONKSİYONLARINI YAZIYORUM ! \\



const openShopping = document.querySelector('.shopping')
const closeShopping = document.querySelector('.alisveriskapat')
const list = document.querySelector('.alisverisliste')
const listCard = document.querySelector('.sepetliste')
const total = document.querySelector('.toplam')
const body2 = document.querySelector('body')
const quantity = document.querySelector('.quantity')






openShopping.addEventListener('click', () => {

    body2.classList.add('aktif')

})


closeShopping.addEventListener('click', () => {

    body2.classList.remove('.aktif')

})





let products = [





{
    id:1,
    name:'ÜRÜN1',
    images:'./img/gomlek/tommyvercetti.png',
    price:501
},

{
    id:2,
    name:'ÜRÜN2',
    images:'./img/ayakkabı/adidassuperstarblack.png',
    price:502
},

{
    id:3,
    name:'ÜRÜN3',
    images:'./img/kot/bluejean2.png',
    price:503
},



{
    id:4,
    name:'ÜRÜN4',
    images:'./img/tisort/beyaztişört.png',
    price:505
},

{
    id:5,
    name:'ÜRÜN5',
    images:'./img/gomlek/lacivertgömlek.png',
    price:506
},



{
    id:6,
    name:'ÜRÜN6',
    images:'./img/ayakkabı/courtmajesticwhite.png',
    price:508
},

{
    id:7,
    name:'ÜRÜN7',
    images:'./img/kot/bluejean.png',
    price:509
},


{
    id:8,
    name:'ÜRÜN8',
    images:'./img/tisort/shaco.png',
    price:513
},



{
    id:9,
    name:'ÜRÜN9',
    images:'./img/gomlek/oduncugrigomlek2.png',
    price:520
},


{
    id:10,
    name:'ÜRÜN10',
    images:'./img/ayakkabı/courtmajesticblack.png',
    price:523
},


{
    id:11,
    name:'ÜRÜN11',
    images:'./img/kot/blackjean.png',
    price:527
},
{
    id:12,
    name:'ÜRÜN12',
    images:'./img/tisort/siyahtişört.png',
    price:528
},


{
    id:13,
    name:'ÜRÜN13',
    images:'./img/gomlek/siyahgömlek.png',
    price:531
},
{
    id:14,
    name:'ÜRÜN14',
    images:'./img/ayakkabı/courtmajesticwhite.png',
    price:532
},

{
    id:15,
    name:'ÜRÜN15',
    images:'./img/kot/jeanblack2.png',
    price:534
},

{
    id:16,
    name:'ÜRÜN16',
    images:'./img/tisort/siyahtişört2.png',
    price:536
},

{
    id:17,
    name:'ÜRÜN17',
    images:'./img/gomlek/siyahgömlek2.png',
    price:538
},
{
    id:18,
    name:'ÜRÜN18',
    images:'./img/tisort/woworc.png',
    price:539
},


]



 let listCards = []


 const initApp = () => {

    products.forEach((value , key)=>{

        let newDiv = document.createElement('div')

        newDiv.classList.add('item')

        newDiv.innerHTML = 
        `
        

        <img src='${value.images}'>


        <div class='title'>${value.name}</div>


        <div class='price'>${value.price.toLocaleString()}</div>


        <button onclick='addToCard(${key})'>Sepete Ekle</button>


        `


        list.appendChild(newDiv)


    })

 }

 initApp()







//  ! SEPETE EKLE FONKSİYONUNU YAZIYORUM ! \\



const addToCard = (key) =>{

    if(listCards[key] == null){

        
        listCards[key] = JSON.parse(JSON.stringify(products[key]))


        listCards[key].quantity = 1


    }

    reloadCard()


}



const reloadCard = () =>{

    listCard.innerHTML = ''

    let count = 0

    let totalPrice = 0


    listCards.forEach((value,key)=> {

     
    totalPrice = totalPrice + value.price

    count = count + value.quantity

    
    if(value != null){

        let newDiv = document.createElement('li')


        newDiv.innerHTML = 
        
        `
        
        <div><img src='${value.images}'></div>

        <div class='cardTitle'>${value.name}<div>

        <div class='cardPrice'>${value.price.toLocaleString()}</div>

        <div>
        <button style="background_color:black" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
            <div class='count'>${count}</div>
        <button style="background_color:black" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity +1})">+</button>
        </div>


        `


    }

    total.innerText = totalPrice.toLocaleString()

    quantity.innerText = count

    })

}


const changeQuantity = (key, quantity) =>{

    if(quantity == 0){
    delete listCards[key]
    }else{
    listCards[key].quantity = quantity
    listCards[key].price = quantity * products[key].price
    }

    reloadCard()

}