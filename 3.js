


var laptopList = document.getElementById('laptopList');

for (var i = 0; i < arrLap.length; i++) {
  var laptop = arrLap[i];

  var laptopDiv = document.createElement('div');
  laptopDiv.classList.add('laptop');

  var image = document.createElement('img');
  image.src = laptop.hinh;
  laptopDiv.appendChild(image);

  var name = document.createElement('h3');
  name.innerHTML = '<a href="product.html">' + laptop.tenLap + '</a>';
  laptopDiv.appendChild(name);

  var price = document.createElement('p');
  price.textContent = 'Giá cũ: ' + laptop.giacu + ', giá mới: ' + laptop.giamoi;
  laptopDiv.appendChild(price);

  var brand = document.createElement('p');
  brand.textContent = 'Thương hiệu: ' + laptop.thuonghieu;
  laptopDiv.appendChild(brand);

  var screen = document.createElement('p');
  screen.textContent = 'Màn hình: ' + laptop.manhinh + ' inch';
  laptopDiv.appendChild(screen);

  laptopList.appendChild(laptopDiv);
}