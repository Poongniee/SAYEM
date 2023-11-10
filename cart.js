// Lấy tham chiếu đến nút "Thêm vào giỏ hàng"
var addToCartButton = document.querySelector('.add-to-cart');

// Gắn sự kiện click cho nút
addToCartButton.addEventListener('click', addToCart);

// Khởi tạo biến lưu tổng giá trị giỏ hàng
var totalPrice = 0;

// Hàm xử lý khi người dùng nhấp vào nút "Thêm vào giỏ hàng"
function addToCart(event) {
  event.preventDefault();

  // Lấy thông tin sản phẩm
  var productName = document.querySelector('.product h2').innerText;
  var productDescription = document.querySelector('.product p').innerText;

  // Lấy giá sản phẩm
  var productPrice = totalPrice; // Thay đổi giá trị này bằng giá của sản phẩm thực tế

  // Tạo một mục mới trong giỏ hàng
  var cartItem = document.createElement('li');
  cartItem.innerHTML = productName + ' - ' + productDescription + ' - $' + productPrice;

  // Thêm mục vào danh sách giỏ hàng
  var cartItemsList = document.querySelector('.cart-items');
  cartItemsList.appendChild(cartItem);

  // Cập nhật tổng giá trị giỏ hàng
  totalPrice += productPrice;
  updateTotalPrice();
}

// Hàm cập nhật tổng giá trị giỏ hàng
function updateTotalPrice() {
  var totalPriceElement = document.querySelector('#total-price');
  totalPriceElement.innerText = 'Tổng giá trị: $' + totalPrice;
}
// Lấy tham chiếu đến phần tử có id "total-price"
var totalPriceElement = document.getElementById('total-price');

// Lấy giá trị số từ phần tử
var totalPriceText = totalPriceElement.innerText;
var totalPrice = parseFloat(totalPriceText.replace(/[^0-9.-]+/g,""));

// Hiển thị giá trị sau khi tính toán
console.log(totalPrice);