

//---------------RECUPERATION DES ELEMENTS HTML-------------------------------//

const formAddProduct = document.getElementById('admin_form_add_product');
const addProduct = document.getElementById('btn_add_product');
const displayProduct = document.getElementById('btn_display_product');
const display = document.getElementById('display_data');
const btn_delete_product = document.getElementById('btn_delete_product');
const btn_update_product = document.getElementById('btn_update_product');
const returnToTheWebsite = document.getElementById('btn_return_website');
const formDeleteProduct = document.getElementById('admin_form_delete_product');
const formUpdateProduct = document.getElementById('admin_form_update_product');

//----------------VARIABLE COMPTEUR DE CLICK----------------------------------//

let clicked = true;
let clicked1 = true;
let clicked2 = true;
let clicked3 = true;

//----------------GESTION DE L'AFFICHAGE DYNAMIQUE DES FORMULAIRES------------//

addProduct.addEventListener('click', (e) => {
    if (clicked === true) {
        formAddProduct.style.display = 'block';
        formDeleteProduct.style.display = 'none';
        formUpdateProduct.style.display = 'none';
        display.style.display = 'none';
        clicked = false;
    } else {
        formAddProduct.style.display = 'none';
        clicked = true;
    }
})

btn_delete_product.addEventListener('click', (e) => {
    if (clicked2 === true) {
        formDeleteProduct.style.display = 'block';
        formAddProduct.style.display = 'none';
        formUpdateProduct.style.display = 'none';
        display.style.display = 'none';
        clicked2 = false;
    } else {
        formDeleteProduct.style.display = 'none';
        clicked2 = true;
    }
})

btn_update_product.addEventListener('click', (e) => {

    if (clicked3 === true) {
        formUpdateProduct.style.display = 'block';
        formDeleteProduct.style.display = 'none';
        formAddProduct.style.display = 'none';
        display.style.display = 'none';
        clicked3 = false;
    } else {
        formUpdateProduct.style.display = 'none';
        clicked3 = true;
    }
})

displayProduct.addEventListener('click', (e) => {
    if (clicked1 === true) {
        display.style.display = 'block';
        formAddProduct.style.display = 'none';
        formUpdateProduct.style.display = 'none';
        formDeleteProduct.style.display = 'none';
        clicked1 = false;
    } else {
        display.style.display = 'none';
        clicked1 = true;
    }
})
returnToTheWebsite.addEventListener('click', (e) => {
    window.location.href = "/TEST à zéro SIRVEN Website/index.php";
})

//------------------------FONCTION POUR RECUPERER LA LISTE DES PRODUITS ET LES AFFICHER----------------------//

function displayAllProduct() {

    fetch('../json/productsAll.json')
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            dataAllProduct = jsondata;
            arrayDataAllProduct = [];


            for (let i = 0; i < dataAllProduct.length; i++) {
                let separatorDisplayProducts = document.createElement('div');
                separatorDisplayProducts.setAttribute('id', 'line_separator_products');
                let productListDisplay = document.createElement('p');
                let imgDisplay = document.createElement('img');
                imgDisplay.setAttribute('src', `${dataAllProduct[i].produit_image} `);
                productListDisplay.innerHTML += `<h3 style='color: red;'>Produit n° ${dataAllProduct[i].id_produits} </h3> 
                                                <h5 style='color:green';>Nom du produit: </h5><h5 style='color:blue';>${dataAllProduct[i].produit_nom} </h5> 
                                                <h5 style='color:green';>Source de l'image du produit:</h5><a href="${dataAllProduct[i].produit_image}"</a> </br> 
                                                <h5 style='color:green';>Prix de l'article TTC:</h5><strong style='color:blue;'>${dataAllProduct[i].produit_prix}€</strong> </br> 
                                                <h5 style='color:green';>Description de l'article: </h5> ${dataAllProduct[i].produit_desc} </br></br>`;
                display.appendChild(productListDisplay);
                display.appendChild(imgDisplay);
                display.appendChild(separatorDisplayProducts);
            }
            arrayDataAllProduct.push(dataAllProduct);
            console.log(arrayDataAllProduct);
        });
}
displayAllProduct();
