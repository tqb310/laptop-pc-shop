function addProducttoCart(id) {
    console.log(id);
    fetch(`http://localhost:9999/cart/add/${id}`, {
        credentials: 'same-origin',
    });
}
