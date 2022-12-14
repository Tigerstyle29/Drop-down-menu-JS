// Событие onmouseover срабатывает, когда курсор мыши наводится на элемент:

document.getElementById('nav').onmouseover = function(event) {
    // отслеживаем нахождение мыши внутри блока навигации и выясняем, где был клик мышью:
    let target = event.target;
    if (target.className == 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
// ф-ия, которая отслеживает положение мыши и проверять элементы под курсором:

document.onmouseover=function(event) {
    let target = event.target;
    console.log(event.target);
    if (target.className!='menu-item' && target.className!='submenu'){
        closeMenu();
    }
}

function closeMenu() { 
    let menu = document.getElementById('nav');
    let subm=document.getElementsByClassName('submenu');
    for (let i=0; i <subm.length; i++) {
        subm[i].style.display="none";
    }
}