let header = document.querySelector('header')
let mainmenylise = document.querySelectorAll('.main_menu>li')
for (let i = 0; i < mainmenylise.length; i++){
    let subMenuContainers = document.querySelectorAll('.sub_menu_container');
    mainmenylise[i].onmouseenter=()=>{
        for(let i=0; i<subMenuContainers.length; i++){
            subMenuContainers[i].style.display = 'none';
        }
        let subMenuContainer = mainmenylise[i].querySelector('.sub_menu_container');
        subMenuContainer.style.display = 'flex';
    }
}
header.onmouseleave=()=>{
        let subMenuContainers = document.querySelectorAll('.sub_menu_container');
        for(let i=0; i<subMenuContainers.length; i++){
            subMenuContainers[i].style.display = 'none';
        }
    }

// 안되는 이유는 돔트리가 완성되지 않은 상태에서 js만 실행됐기 때문
// html 문서에 스크립트 링크 끝에  defer 적어 넣기
