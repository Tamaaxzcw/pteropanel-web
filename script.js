const slider = document.getElementById('package-slider');
const packageNameDisplay = document.getElementById('package-name');
const priceDisplay = document.getElementById('price');
const orderButton = document.querySelector('.order-btn');

const whatsappNumber = '6281547107318';

const regularPackages = [
    "Paket 1 GB", "Paket 2 GB", "Paket 3 GB", "Paket 4 GB", "Paket 5 GB",
    "Paket 6 GB", "Paket 7 GB", "Paket 8 GB", "Paket 9 GB", "Paket 10 GB"
];

function updateDisplay() {
    const value = parseInt(slider.value);
    
    if (value <= 10) {
        packageNameDisplay.textContent = regularPackages[value - 1];
        priceDisplay.innerHTML = `Rp ${value}k <span>/bulan</span>`;
    } else {
        packageNameDisplay.textContent = "⚡ Paket Unlimited ⚡";
        priceDisplay.innerHTML = `Rp 15k <span>/bulan</span>`;
    }
}

function orderPackage() {
    const value = parseInt(slider.value);
    let productName;
    let price;

    if (value <= 10) {
        productName = `Panel Reguler ${value}GB`;
        price = `${value}k`;
    } else {
        productName = 'Panel Unlimited';
        price = '15k';
    }
    
    const message = `Halo Bang, saya mau pesan ${productName} seharga Rp ${price}/bulan.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

slider.addEventListener('input', updateDisplay);
orderButton.addEventListener('click', orderPackage);

updateDisplay();
