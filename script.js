const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

//Dark Mode
function darkMode(){
    toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon');   
}

//Light Mode
function lightMode(){
    toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
}

//Switch Theme
function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}