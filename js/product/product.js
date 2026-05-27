document.addEventListener('DOMContentLoaded', () => {

    const pageButtons = document.querySelectorAll('.page_number');
    const itemPages = document.querySelectorAll('.item_page');

    pageButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const pageNumber = button.dataset.page;

            itemPages.forEach((page) => {
                page.classList.remove('active');
            });

            pageButtons.forEach((btn) => {
                btn.classList.remove('active');
            });

            const targetPage = document.querySelector(
                `.item_page[data-page="${pageNumber}"]`
            );

            targetPage.classList.add('active');

            button.classList.add('active');

            const itemSection = document.querySelector('.btn_box');

            itemSection.scrollIntoView({
                behavior: 'smooth'
            });
        });

    });

});