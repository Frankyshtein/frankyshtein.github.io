let lang = 'EN';
let ru = ['Денис Хомич','Фронт-энд разработчик','<a href="Хомич Д. А..pdf" download="">Скачать резюме</a>','Просмотреть проекты на <a href="github/projects.html" target="_blank">Github</a>','Ещё один проект на <a href="https://bitbucket.org/frankyshtein/" target="_blank">Bitbucket</a>','Контакты:'];
let en = ['Denis Homich','Front-end Developer','<a href="Homich D. A..pdf" download="">Download CV</a>','View some projects on <a href="github/projects.html" target="_blank">Github</a>','Another project on <a href="https://bitbucket.org/frankyshtein/" target="_blank">Bitbucket</a>','Contacts:'];  
(function init() {
    document.querySelector('.langSelect .selected + span').addEventListener('click', langSwitch);
    document.querySelector('.langSelect .selected').addEventListener('click', langSwitch);
    document.querySelector('.wrapper').addEventListener('transitionend',function(){
        textSwitch();
        document.querySelector('.wrapper').classList.toggle('disappeared')
    });
}());
function langSwitch (e) {
    if ( !e.target.classList.contains('selected') ) {
        document.querySelector('.selected').classList.toggle('selected');
        e.target.classList.toggle('selected');
        lang = e.target.textContent;
        document.querySelector('.wrapper').classList.toggle('disappeared');
    }
}
function textSwitch () {
    if ( lang == 'RU') {
        document.querySelectorAll('.wrapper > p').forEach((d,i) => d.innerHTML = ru[i]);
    } else {
        document.querySelectorAll('.wrapper > p').forEach((d,i) => d.innerHTML = en[i]);
    }
}