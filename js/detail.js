let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1
let date = today.getDate();

document.querySelectorAll('.date').forEach(element => {
    element.innerText = `${year}.${month}.${date}`;
})