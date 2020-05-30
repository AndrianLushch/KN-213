  'use strict';
  let head = document.head,
      link = document.createElement('link');
  link.rel = 'stylesheet';
  if (localStorage.getItem('themeStyle') === 'dark') {
    document.getElementById('switch-1').setAttribute('checked', true); 
  }
  // по умолчанию светлая тема
  else {
    link.href = 'light_css.css'; 
  }
  head.appendChild(link); 

  // подія переключення чекбокса
document.getElementById('switch-1').addEventListener('change', ev => 
{
    let btn = ev.target;
    // коли чекбокс включений
if (btn.checked) 
{
	document.getElementById("myForm").style.display = "none";
        document.getElementById("botnav").style.background = "black";
	document.getElementById("navbtn0").style.background = "red";
	document.getElementById("navbtn").style.color = "white";
	document.getElementById("navbtn1").style.color = "white";
	document.getElementById("navbtn2").style.color = "white";
	document.getElementById("navbtn3").style.color = "white";
        link.href = 'dark_css.css'; // включаємо чорну тему
        localStorage.setItem('themeStyle', 'dark'); // запамятовуємо значення
}
else 
{
      document.getElementById("myForm").style.display = "block";
      document.getElementById("botnav").style.background = "#F7F7F7";
      document.getElementById("navbtn0").style.background = "green";
      document.getElementById("navbtn").style.color = "black";
      document.getElementById("navbtn1").style.color = "black";
      document.getElementById("navbtn2").style.color = "black"; 
      document.getElementById("navbtn3").style.color = "black";
      link.href = 'light_css.css'; // включаем светлую тему
      localStorage.setItem('themeStyle', 'light'); 
}
}
);

