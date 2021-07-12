function ocultar(){
    const menu = document.getElementsByClassName("menu_bar");
    if(menu[0].style.display == 'none'|| menu[0].style.display==''){
        menu[0].style.display = 'grid';
    } else if(menu[0].style.display == 'grid'){
        
        menu[0].style.display = 'none';
    }
}