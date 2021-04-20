let btn = document.querySelector('.btn'),
    body = document.body;
//first i add class, if user change the color it will sored in local storage 
//else if user not use any mode it will be by default light mode
body.classList.add(localStorage.getItem('mode') || 'light');
btn.onclick=function(){ //on click on button it will switch between light and dark mode
  if(body.classList.contains('light')){
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem('mode', 'dark')
  }else{
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem('mode', 'light')
  }
}