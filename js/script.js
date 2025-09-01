let cart = [];

// Добавить товар
function addToCart(name, price) {
  let item = cart.find(i => i.name === name);
  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}

// Отобразить корзину
function renderCart() {
  let itemsDiv = document.getElementById("cart-items");
  let totalDiv = document.getElementById("cart-total");
  itemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    itemsDiv.innerHTML += `<div>${item.name} × ${item.qty} — ${item.price * item.qty} c</div>`;
  });

  totalDiv.innerText = total;
}

// Очистить корзину
function clearCart() {
  cart = [];
  renderCart();
}

// Отправить заказ в WhatsApp
function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("Корзина пуста!");
    return;
  }

  let text = "Здравствуйте! Хочу заказать:%0A";
  cart.forEach(item => {
    text += `${item.name} × ${item.qty} = ${item.price * item.qty} c%0A`;
  });
  text += `Итого: ${document.getElementById("cart-total").innerText} c`;

  let phone = "996500000000"; // <-- Замени на номер заведения
  let url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank");
}