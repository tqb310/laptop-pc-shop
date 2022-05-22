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
