let minAmount = 1;
let totalPrice = document.getElementById(`totalprice`);

function incAmount(id) {
    let amount = document.getElementById(
        `cartproduct-amount-${id}`,
    );
    amount.innerText = parseInt(amount.innerText) + 1;
    cartCalcFinishPrice(id);
}

function decAmount(id) {
    let amount = document.getElementById(
        `cartproduct-amount-${id}`,
    );
    let newAmount = parseInt(amount.innerText) - 1;
    if (newAmount - minAmount < 0) newAmount = minAmount;
    amount.innerText = newAmount;
    cartCalcFinishPrice(id);
}

function cartOnLoad() {
    let finishPrice = document.querySelectorAll(
        '.money.finishprice',
    );
    Array.from(finishPrice).map(p =>
        cartCalcFinishPrice(p.id.split('-')[2]),
    );
}

function cartCalcTotalPrice() {
    let totalPrice = document.getElementById(`totalprice`);
    let finishPrice = document.querySelectorAll(
        '.money.finishprice',
    );
    totalPrice.innerText = moneyFormat(
        Array.from(finishPrice).reduce((total, p) => {
            return total + moneyToInt(p.textContent);
        }, 0),
    );
}

function cartCalcFinishPrice(id) {
    let finishPrice = document.getElementById(
        `cartproduct-finishprice-${id}`,
    );
    let amount = document.getElementById(
        `cartproduct-amount-${id}`,
    );
    let unitPrice = document.getElementById(
        `cartproduct-unitprice-${id}`,
    );
    finishPrice.textContent = moneyFormat(
        parseInt(amount.innerText) *
            moneyToInt(unitPrice.textContent),
    );
    cartCalcTotalPrice();
}
