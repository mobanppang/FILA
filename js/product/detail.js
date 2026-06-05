let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1
let date = today.getDate();

document.querySelectorAll('.date').forEach(element => {
    element.innerText = `${year}.${month}.${date}`;
})

const cartButton = document.querySelector('.cart button');

if (cartButton) {
    cartButton.addEventListener('click', () => {
        const shouldMoveCart = confirm('장바구니로 이동하겠습니까?');

        if (shouldMoveCart) {
            window.location.href = '../user/cart.html';
        }
    });
}
