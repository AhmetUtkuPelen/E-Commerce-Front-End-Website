// !! NAVBAR İKON VE LİSTELERİ SANDVİÇ MENU İÇİN SEÇİM YAPIYORUM !! \\

const menuIcon = document.querySelector('.ikon')

const menu = document.querySelector('.liste')

const nav = document.querySelector('.navigasyon')

// !!! DARK MODE LIGHT MODE !!! \\

const renkdegis = document.getElementById('toggleDark')

const body = document.querySelector('main')



// ! NAVBAR İKON KOD KISMI ! \\


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



// ! DARK LIGHT MODE KOD KISMI ! \\




renkdegis.addEventListener('click', function(){

    this.classList.toggle('bi-moon')


    if(this.classList.toggle('bi-emoji-sunglasses')){

        body.style.background ='linear-gradient(to left, lightblue , white , lightblue , white , lightblue)'

    }else{

        body.style.background ='darkgray'

    }

})






// ! DUMMYJSON API ÇEKİYORUM ! \\ ! \\ SEPETE ÜRÜN EKLE ÇIKAR İŞLEMLERİNİN KODLARI ! \\


const wrapper = document.querySelector('.wrapper')

const basket = document.querySelector('.basket')


function startPage(){

    const sepet = JSON.parse(localStorage.getItem('sepet'))

    if(sepet){

        for(let i of sepet){

            sepeteEkle(i)

        }

    }else{

        localStorage.setItem('sepet','[]')

    }

}

startPage()



function sepeteEkle(urun){
    

    const div = document.createElement('div')

    div.classList.add('d-flex', 'align-items-center', 'justify-content-between' ,'p-2',`urun${urun.id}`)

    div.innerHTML=
    `

    <img src="${urun.resim}" width="100px" height="100px" alt="">

    <p class="m-0" >${urun.isim}</p>

    <p class="m-0 fiyat" >${urun.fiyat}</p>

    <div class='d-flex align-items-center gap-2'>
            <button onclick=azalt(${urun.id}) class='btn btn-secondary' >-</button>
            <p class="m-0" ><span class="adet">${urun.adet}</span> x</p>
            <button onclick=arttir(${urun.id}) class='btn btn-secondary' >+</button>

    </div>
        
            <p class="m-0" onclick=sil(${urun.id}) >Sil</p>
    
            `
    
            basket.append(div)

        }


        function arttir(id){

            const div = document.querySelector(`.urun${id}`)

            let fiyat = div.querySelector('.fiyat')

            let adet = div.querySelector('.adet')

            let birimFiyat =fiyat.textContent / adet.textContent


            let urunler = JSON.parse(localStorage.getItem('sepet'))

            let ilgiliUrun = urunler.find(i => i.id == id)

            

    let art = adet.textContent
    
    
    art++
    
    adet.textContent = art
    
    fiyat.textContent = birimFiyat * art
    
    
    ilgiliUrun.fiyat = birimFiyat*art
   
    ilgiliUrun.adet = art

    localStorage.setItem('sepet',JSON.stringify(urunler))

    
}



function azalt(id){

    const div = document.querySelector(`.urun${id}`)

    let fiyat = div.querySelector('.fiyat')

    let adet = div.querySelector('.adet')

    let birimFiyat =fiyat.textContent / adet.textContent

    let urunler = JSON.parse(localStorage.getItem('sepet'))

    let ilgiliUrun = urunler.find(i => i.id == id)



    let azalt = adet.textContent

    if(azalt > 1){

        azalt--

        adet.textContent = azalt

        fiyat.textContent = birimFiyat * azalt
      
        ilgiliUrun.fiyat = birimFiyat*azalt

        ilgiliUrun.adet = azalt

        localStorage.setItem('sepet',JSON.stringify(urunler))

    }else{

        div.remove()

        let guncelHal = urunler.filter((urun )=> urun.id != id)

        localStorage.setItem('sepet',JSON.stringify(guncelHal))

    }

}


function sil(id){

    const div = document.querySelector(`.urun${id}`)

    let urunler = JSON.parse(localStorage.getItem('sepet'))

    let guncelHal = urunler.filter((urun )=> urun.id != id)
    
    localStorage.setItem('sepet',JSON.stringify(guncelHal))

    div.remove()
}


let url = 'https://dummyjson.com/products'

fetch(url)
    .then(res => res.json())
    .then(data => dataYazdir(data))


function dataYazdir(bilgi){

    for( let i of bilgi.products){
        
        let yildizSayisi = Math.round(i.rating)
        
        const col = document.createElement('div')

        col.classList.add('col-lg-4','col-sm-6','col-12')

        let deneme = ''

        for(let i=1;i<yildizSayisi;i++){

            deneme +=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                     </svg>`  

                    }
        col.innerHTML = 

        `
            <div class="card " id=${i.id}>
                <div class="card-header d-flex justify-content-between align-items-center">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item">${i.category}</li>
                        <li class=" breadcrumb-item" aria-current="page">${(i.title).slice(0,10)}...</li>
                    </ol>
                    <span>
                        ${deneme}
                    </span>
                </div>
                <div class="card-body p-0">
                    <img src="${i.thumbnail}" class="w-100" style="height: 300px;" alt="">
                </div>
                <div class="card-footer">
                    <p class="isim" >${i.title}</p>
                    <p class='tasma'>${i.description}</p>
                    <p><span class="fiyat" >${i.price}</span> $</p>
                    <button onclick=satinAl(${i.id}) class="btn btn-outline-primary">Satin Al</button>
                </div>
            </div>

            `

            wrapper.append(col)

        }

    }


    function satinAl(id){

        const card = document.getElementById(id)


        const isim = card.querySelector('.isim').textContent

        const fiyat = card.querySelector('.fiyat').textContent

        const resim = card.querySelector('img').src
    

        const urun = {
        'id':id,
        'isim':isim,
        'fiyat':fiyat,
        'resim':resim,
        'adet':1
                    }
    
    let urunler = JSON.parse(localStorage.getItem('sepet') )
    
    let ilgiliUrun = urunler.find(i => i.id == urun.id)
    
    if(ilgiliUrun == undefined){
    
        urunler.push(urun)

    
    }else if(ilgiliUrun){
    
        ilgiliUrun.adet +=1
    
        let guncelFiyat = ilgiliUrun.adet * fiyat
    
        ilgiliUrun.fiyat = guncelFiyat
    
    }
    
    const sepettekiCard = basket.querySelector(`.urun${id}`)
    
    if(sepettekiCard != null){
    
        const adet = sepettekiCard.querySelector('.adet')
    
        const price = sepettekiCard.querySelector('.fiyat')
        
        let art = Number(adet.textContent)
    
        art++

        let guncelFiyat = fiyat * art
     
    
        adet.textContent = art
    
        price.textContent = guncelFiyat
       
       
    }else{
    
        sepeteEkle(urun)
    
    }

    localStorage.setItem('sepet',JSON.stringify(urunler))

}



// ! DAHA SONRA DÖN HATANA BAK ! \\

// const wrapper = document.querySelector('.wrapper')

// const basket = document.querySelector('.basket')

// function startPage(){

//     const sepet = JSON.parse(localStorage.getItem('sepet'))

//     if(sepet){
//         for(let i of sepet){
//             sepeteEkle(i)
//         }
//     }else{

//         localStorage.setItem('sepet','[]')

//     }

// }

// startPage()

// function sepeteEkle(urun){


//     const div =document.createElement('div')

//     div.classList.add('d-flex','align-items-center','justify-content-between','p-2','text-center',`urun${urun.id}`)

//     div.innerHTML = 
//     `

//     <img src="${urun.resim}" width="100px" height="100px" alt="">
//     <p class="m-0">${urun.isim}</p>
//     <p class="m-0 fiyat">${(urun.fiyat) * urun.adet}</p>
//     <p class="m-0"><span class="adet">${urun.adet}</span> X</p>
//     <p class="m-0" onclick=sil(${urun.id}) >Sil</p>

//     `

//     basket.append(div)

// }

// function sil(id){

//     const div = document.querySelector(`.urun${id}`)
    
//     let urunler = JSON.parse(localStorage.getItem('sepet'))

//     let guncelHal = urunler.filter((urun) => urun.id != id)
    
//     localStorage.setItem('sepet',JSON.stringify(guncelHal))

//     div.remove()

// }



// let url = 'https://dummyjson.com/products'


// fetch(url)
// .then(res => res.json())
// .then(data => dataYazdır(data))


// function dataYazdır( bilgi){

//     for(let i of bilgi.products){

//         let yildizSayisi = Math.round(i.rating)

//         const col = document.createElement('div')

//         col.classList.add('col-lg-4','col-sm-6','col-12')

//         let deneme = ''

//         for(let i=1;i<yildizSayisi;i++){
//             deneme += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
//             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                         </svg>`
//         }
//         col.innerHTML = 
//         `        
// <div class="card" id=${i.id}>

//     <div class="card-header d-flex justify-content-between align-items-center">

//         <ol class="breadcrumb m-0">
//             <li class="breadcrumb-item">${i.category}</li>
//             <li class="breadcrumb-item active" aria-current="page">${i.title.slice(0,10)}...</li>
//         </ol>

//         <span>
//         ${deneme}
//         </span>

//     </div>


//     <div class="card-body p-0">

//         <img src="${i.thumbnail}" class="w-100" style="height: 300px;" alt="">

//     </div>

//         <div class="card-footer">
//         <p class="isim">${i.title}</p>
//         <p class='tasma'>${i.description}</p>
//         <p><span class="fiyat">${i.price}</span> $</p>
//         <button onclick=satınAl(${i.id}) class="btn btn-outline-primary">Satın Al</button>
//         <div>

// </div>
        
//         `

//         wrapper.append(col)

//     }
// }


// function satınAl(id){

//     const card = document.getElementById(id)

//     const isim = card.querySelector('.isim').textContent
//     const fiyat = card.querySelector('.fiyat').textContent
//     const resim = card.querySelector('img').src
   
//     const urun= {

//         'id': id,
//         'isim':isim,
//         'fiyat':fiyat,
//         'resim':resim,
//         'adet':1

//     }

//     let urunler = JSON.parse(localStorage.getItem('sepet'))

//     let ilgiliUrun = urunler.find(i => i.id == urun.id)

//     if(ilgiliUrun == undefined){

//         urunler.push(urun)

//     }else if(ilgiliUrun){

//         ilgiliUrun.adet += 1

//     }



//     for(let i of urunler){

//         sepeteEkle(i)

//     }

//     const sepettekiCard = document.querySelector(`.urun${id}`)

//     if(sepettekiCard != null){

//         const adet = sepettekiCard.querySelector('.adet')

//         const price = sepettekiCard.querySelector('.fiyat')

//         let art = Number(adet.textContent)

//         art++

//         let guncelFiyat = fiyat * art

//         adet.textContent = art

//         price.textContent = guncelFiyat

//     }else{

//         sepeteEkle(urun)

//     }

//     localStorage.setItem('sepet',JSON.stringify(urunler))

// }