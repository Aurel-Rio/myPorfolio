const display = document.getElementById('display_data_book');
const btn_add_products = document.getElementById('btn_add_products');
const btn_update_products = document.getElementById('btn_update_products');
const btn_delete_products = document.getElementById('btn_delete_products');
const btn_crud = document.getElementById('btn_crud');

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
                productListDisplay.innerHTML += `<div id="flexBook"> <h3 style='color: red;'>Produit n° ${dataAllProduct[i].id_produits} </h3> 
                                        <h5 style='color:green';>Nom du produit: </h5><h5 style='color:blue';>${dataAllProduct[i].produit_nom} </h5>      
                                        <h5 style='color:green';>Prix de l'article TTC:</h5><strong style='color:blue;'>${dataAllProduct[i].produit_prix}€</strong> </br> 
                                        <h5 style='color:green';>Description de l'article: </h5> </br>${dataAllProduct[i].produit_desc} </br></br> 
                                        </div>`;
                display.appendChild(productListDisplay);
                display.appendChild(imgDisplay);
                display.appendChild(separatorDisplayProducts);
                productListDisplay.focus();
            }
            arrayDataAllProduct.push(dataAllProduct);
            console.log(arrayDataAllProduct);
        });
}

displayAllProduct();
