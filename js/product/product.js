document.addEventListener('DOMContentLoaded', () => {

    const pageList = document.querySelector('.page_list');
    const prevButton = document.querySelector('.prev_page');
    const nextButton = document.querySelector('.next_page');

    const TOTAL_PAGE = 69;
    let currentPage = 1;

    function renderPagination() {

        document.querySelectorAll('.page_item').forEach(item => {
            item.remove();
        });

        prevButton.style.visibility =
            currentPage === 1 ? 'hidden' : 'visible';

        nextButton.style.visibility =
            currentPage === TOTAL_PAGE ? 'hidden' : 'visible';

        const nextLi = nextButton.parentElement;

        const addPage = (page, active = false) => {

            const li = document.createElement('li');
            li.classList.add('page_item');

            const button = document.createElement('button');

            button.type = 'button';
            button.classList.add('page_number');

            if (active) {
                button.classList.add('active');
            }

            button.textContent = page;

            button.addEventListener('click', () => {
                currentPage = page;
                renderPagination();
            });

            li.appendChild(button);

            pageList.insertBefore(li, nextLi);
        };

        const addDots = () => {

            const li = document.createElement('li');
            li.classList.add('page_item');

            li.innerHTML = '<span>...</span>';

            pageList.insertBefore(li, nextLi);
        };

        let start;
        let end;

        // 처음 5페이지
        if (currentPage <= 5) {

            start = 1;
            end = 5;

            for (let i = start; i <= end; i++) {
                addPage(i, currentPage === i);
            }

            addDots();
            addPage(TOTAL_PAGE);

            return;
        }

        // 마지막 5페이지
        if (currentPage >= TOTAL_PAGE - 4) {

            addPage(1);
            addDots();

            start = TOTAL_PAGE - 4;
            end = TOTAL_PAGE;

            for (let i = start; i <= end; i++) {
                addPage(i, currentPage === i);
            }

            return;
        }

        // 중간 구간
        addPage(1);
        addDots();

        start = currentPage - 2;
        end = currentPage + 2;

        for (let i = start; i <= end; i++) {
            addPage(i, currentPage === i);
        }

        addDots();
        addPage(TOTAL_PAGE);

    }

    prevButton.addEventListener('click', () => {

        if (currentPage > 1) {
            currentPage--;
            renderPagination();
        }

    });

    nextButton.addEventListener('click', () => {

        if (currentPage < TOTAL_PAGE) {
            currentPage++;
            renderPagination();
        }

    });

    renderPagination();

});
