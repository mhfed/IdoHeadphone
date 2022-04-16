// ============Trượt banner
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);


/**===================tạo mảng products chứa tất cả các sản phẩm========= */
var products = [{
        id: '1',
        name: 'Focal Clear',
        img: 'images/product/headphone1.png',
        price: 1500000,
        status: true
    },
    {
        id: '2',
        name: 'FiiO FH5s',
        img: 'images/product/headphone2.png',
        price: 1200000,
        status: true
    },
    {
        id: '3',
        name: 'Epic Air',
        img: 'images/product/headphone3.png',
        price: 1900000,
        status: true
    },
    {
        id: '4',
        name: 'Go Air',
        img: 'images/product/headphone4.png',
        price: 2200000,
        status: true
    },
    {
        id: '5',
        name: 'Sony WI',
        img: 'images/product/headphone5.png',
        price: 1700000,
        status: true
    },
    {
        id: '6',
        name: 'Air ANC',
        img: 'images/product/headphone6.png',
        price: 990000,
        status: true
    },

];

// Lấy element có chứa toàn bộ sản phẩm
var productDiv = document.querySelectorAll('.product');



// tạo hàm showCard 
// Vứt 2 lần product vào vòng lặp
// Tìm độ dài mảng 
var productsLength = products.length;
// Chia đôi độ dài mảng
var divideProductsLength = products.length / 2;
// var divideProductsLength_1 = divideProductsLength + 1;

function showProduct() {
    for (var i = 0; i < divideProductsLength; i++) {
        productDiv.item(0).innerHTML += `
        <div class="card">
        <div class="imgBx">
            <img src="${products[i].img}" alt="" class="boxx img-fuild">
            <h2>${products[i].name}</h2>
        </div>
        <div class="content">
            <div class="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <div class="color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="price">${products[i].price}</div>
            <button onclick='addToCart(${products[i].id})' >Add to card</button>
            <p>${products[i].status ? 'Còn hàng' : 'Hết hàng'}</p>
        </div>
        </div>
        `;
        // Tiếp tục nhét vào div dưới 
        productDiv.item(1).innerHTML += `
        <div class="card">
        <div class="imgBx">
            <img src="${products[divideProductsLength +i].img}" alt="" class="boxx img-fuild">
            <h2>${products[divideProductsLength +i].name}</h2>
        </div>
        <div class="content">
            <div class="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <div class="color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="price">${products[divideProductsLength +i].price}</div>
            <button onclick='addToCart(${products[divideProductsLength +i].id})' >Add to card</button>
            <p>${products[divideProductsLength +i].status ? 'Còn hàng' : 'Hết hàng'}</p>
        </div>
        </div>
        `;
    }

}

showProduct();

var cartData = [];

var quantityCart
var cartDataLength

function addToCart(id) {
    for (var i = 0; i < productsLength; i++) {
        if (products[i].id == id) {
            var newProduct = {
                id: products[i].id,
                name: products[i].name,
                img: products[i].img,
                price: products[i].price,
                status: products[i].status
            };
        }
    }
    cartData.push(newProduct);
    alert('Đã thêm vào giỏ hàng');
    showCart();
    cartDataLength = cartData.length;
    quantityCart = document.getElementById('quantity');
    quantityCart.innerHTML = cartDataLength;

    // Ngu thế nhỉ. Nhét cái này vào trong khi nó reload mới hiển thị được số sản phẩm trong giỏ hàng chứ kaka
}


function showCart() {
    var tableData = document.getElementById('table-data');
    tableData.innerHTML = '';
    var total = 0;
    for (let i = 0; i < cartData.length; i++) {
        tableData.innerHTML += `
            <tr>
            <td>${i + 1}</td>
            <td>${cartData[i].name}</td>
            <td><img src="${cartData[i].img}"></td>
            <td class="cart-price">${cartData[i].price}</td>
            <td>${cartData[i].status ? "Còn hàng" : "Hết hàng"}</td>
            </tr>
            `;
        total += cartData[i].price;
    }
    var tfoot = document.getElementById('table-foot');
    tfoot.innerHTML = `
        <tr>
        <td colspan="3">Total</td>
        <td colspan="2">${total}</td>
        </tr>
    `
}

var cartDiv = document.getElementById('cart');
var showAndHide = document.getElementById('showAndHide');

var btnShowCart = document.getElementsByClassName('ti-shopping-cart')[0];
btnShowCart.onclick = function() {
    if (cartData == '') {
        alert('Giỏ hàng trống');
    } else {
        cartDiv.classList.toggle('show');
        showAndHide.classList.toggle('hide');

    }
}

// ==================Xóa tất cả sản phẩm trong giỏ hàng================

var btnRemove = document.getElementById('btn-remove');
btnRemove.onclick = function() {
        cartData.splice(0, cartData.length);
        showCart();
        cartDiv.classList.toggle('show');
        showAndHide.classList.toggle('hide');

        cartDataLength = cartData.length;
        quantityCart = document.getElementById('quantity');

        //Ủa đoạn này sao phải lấy lại element lần nữa gán lại bằng cartDataLength mới được nhỉ??
        quantityCart.innerHTML = cartDataLength;
    }
    //Drop down user xuống. có form đăng kí đăng nhập.
    //  trong đăng nhập có quên mật khẩu hoặc đăng kí.
    // trog đăng kí có tài khoản rồi...


// =========Hiển thị số sản phẩm trong giỏ hàng===============

// ==================Xóa từng sản phẩm trong giỏ hàng================
// =========Tạo thêm nút bấm đặt hàng
// =================Trong cart có thể chọn nhiều sản phẩm.
//  Một sản phầm chỉ được addToCart 1 lần. lần thứ 2 sẽ alert(Bạn đã thêm vào giỏ rồi),
// và sản phẩm có thể chọn nhiều sl

// Check login đăng nhập rồi mới thêm vào giỏ hàng được