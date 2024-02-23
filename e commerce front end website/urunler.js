const main  = document.querySelector('.products')
let products = []

const trimText = (value,number)=>{
return value.substring(0,number)+'...'
}



// ! ÜRÜN LİSTE ZIMBIRTISINI YAPIYORUM !! \\
const listItems = (image,title,category,price) => {

    let Product = document.createElement('div')
    let Image = document.createElement('img')
    let Title = document.createElement('h2')
    let Category = document.createElement('h4')
    let Price = document.createElement('h3')
    let Button = document.createElement('div')


    Product.classList.add('product')
    Button.classList.add('sepeteat')


    Image.src = image
    Title.textContent=title
    Category.textContent=category
    Price.textContent=price+' $'
    Button.textContent='Satın Al'
    Button.innerHTML += `${'<i class="fas fa-cart-arrow-down"></i>'}`

    Product.appendChild(Image)
    Product.appendChild(Title)
    Product.appendChild(Category)
    Product.appendChild(Price)
    Product.appendChild(Button)

    main.appendChild(Product)




}



// ! ÜRÜN GETİREBİLMEK İÇİN APİ ÇEKME FONKSİYONU YAPIYORUM ! \\
const getirProducts = async () => {

    let data = await fetch('https://fakestoreapi.com/products')
    let result = await data.json()
    products = result

    products.map(item => {

        listItems(item.image,trimText(item.title,20),item.category,item.price)

    })
}

getirProducts()




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




//  DARK LIGHT MODE KOD KISMI \\




renkdegis.addEventListener('click', function(){

    this.classList.toggle('bi-moon')


    if(this.classList.toggle('bi-emoji-sunglasses')){

        body.style.background ='linear-gradient(to left, lightblue , white , lightblue , white , lightblue)'

    }else{

        body.style.background ='darkgray'

    }

})