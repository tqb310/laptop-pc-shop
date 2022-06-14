function addProductCart(id) {
    return fetch(`http://localhost:9999/cart/add/${id}`, {
        credentials: 'same-origin',
    });
}

function reduceProductCart(id) {
    return fetch(
        `http://localhost:9999/cart/reduce/${id}`,
        {
            credentials: 'same-origin',
        },
    );
}

function removeProductCart(id) {
    return fetch(
        `http://localhost:9999/cart/remove/${id}`,
        {
            credentials: 'same-origin',
        },
    );
}

function submitBill(data) {
    return fetch(
        `http://localhost:9999/cart/create-bill`,
        data,
        {
            credentials: 'same-origin',
        },
    );
}
