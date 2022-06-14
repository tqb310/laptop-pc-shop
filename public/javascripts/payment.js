const { response } = require('express');

function toggleContent(id) {
    let contents =
        document.getElementsByClassName('row-content');
    Array.from(contents).map(content =>
        content.classList.remove('active'),
    );
    let activeContent = document.getElementById(id);
    activeContent.classList.add('active');
}

let provinceSelect = document.getElementById('province');
let districtSelect = document.getElementById('district');
let wardSelect = document.getElementById('ward');

function renderProvince() {
    let data = getProvinces();
    for (const x of data) {
        provinceSelect.options[
            provinceSelect.options.length
        ] = new Option(x.name, x.code);
    }
}

function changeProvince() {
    let data = getDistricts(provinceSelect.value);
    for (const x of data) {
        districtSelect.options[
            districtSelect.options.length
        ] = new Option(x.name, x.code);
    }
    districtSelect.value = '';
}

function changeDistrict() {
    let data = getWards(
        provinceSelect.value,
        districtSelect.value,
    );
    for (const x of data) {
        wardSelect.options[wardSelect.options.length] =
            new Option(x.name, x.code);
    }
    wardSelect.value = '';
}

function renderMoney() {
    let moneys = document.querySelectorAll('.money');
    Array.from(moneys).map(money => {
        money.textContent = moneyFormat(money.textContent);
    });
}

function createBill() {
    let data = {
        information: {
            email: $('#email')[0].value,
            name: $('#name')[0].value,
            phone: $('#phone')[0].value,
            address: (() => {
                let street = $('#address')[0].value;
                let provinceCode = $('#province')[0].value;
                let districtCode = $('#district')[0].value;
                let wardCode = $('#ward')[0].value;
                return `${street}, ${
                    getWards(provinceCode, districtCode)[
                        wardCode
                    ].name
                }, ${
                    getDistricts(provinceCode)[districtCode]
                        .name
                }, ${getProvinces()[provinceCode].name}`;
            })(),
        },
        paymentMethod: 1,
    };
    // submitBill(data)
    //     .then(response => response.json)
    //     .then(data => console.log(data));
}
