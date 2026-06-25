let cartCount = 0;

function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').textContent);
    const size = document.getElementById('sizeSelect').value;
    const colorElement = document.querySelector('.color-dot.active');
    let colorName = 'black';
    
    if (colorElement) {
        if (colorElement.classList.contains('black')) colorName = 'Black';
        else if (colorElement.classList.contains('white')) colorName = 'White';
        else if (colorElement.classList.contains('blue')) colorName = 'Blue';
    }
    
    cartCount += quantity;
    document.getElementById('cartCount').textContent = cartCount;
    
    alert('Added ' + quantity + ' item(s) to cart!\nSize: ' + size + '\nColor: ' + colorName);
}

function changeQuantity(amount) {
    const quantityEl = document.getElementById('quantity');
    let current = parseInt(quantityEl.textContent);
    let newValue = current + amount;
    
    if (newValue < 1) newValue = 1;
    if (newValue > 10) newValue = 10;
    
    quantityEl.textContent = newValue;
}

function selectColor(element) {
    document.querySelectorAll('.color-dot').forEach(function(dot) {
        dot.classList.remove('active');
    });
    element.classList.add('active');
}

function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

function addRelatedToCart(productName, productPrice) {
    cartCount += 1;
    document.getElementById('cartCount').textContent = cartCount;
    alert('Added "' + productName + '" (' + productPrice + ') to cart!');
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert('Searching for: "' + query + '"\n(This is a demo search. In a real app, it would show results.)');
        } else {
            alert('Please enter a search term.');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});