let lang = 'EN';
let ru = ['Денис Хомич','Фронт-энд разработчик','<a href="Хомич Д. А..pdf" download="">Скачать резюме</a>','Просмотреть проекты на <a href="projects.html" target="_blank">Github</a>','Ещё один проект на <a href="https://bitbucket.org/frankyshtein/" target="_blank">Bitbucket</a>','Контакты:'];
let en = ['Denis Homich','Front-end Developer','<a href="Homich D. A..pdf" download="">Download CV</a>','View some projects on <a href="projects.html" target="_blank">Github</a>','Another project on <a href="https://bitbucket.org/frankyshtein/" target="_blank">Bitbucket</a>', 'Contacts:'];  

function langSwitch (e) {
    let count = 1;
    if ( !e.target.classList.contains('selected') ) {
        document.querySelector('.selected').classList.toggle('selected');
        e.target.classList.toggle('selected');
        lang = e.target.textContent;
        document.querySelectorAll('.line').forEach((item,index)=>{
            item.classList.remove('rotation');
            setTimeout(()=>{
                item.classList.add('rotation');
                setTimeout(()=>{
                    textSwitch(item,index);
                },900);
            },count*300);
            count++;
        });
    }
}
function textSwitch (item, index) {
    if ( lang == 'RU') {
        item.innerHTML = ru[index];
    } else {
        item.innerHTML = en[index];
    }
}
(function init() {
    document.querySelector('.langSelect .selected + span').addEventListener('click', langSwitch);
    document.querySelector('.langSelect .selected').addEventListener('click', langSwitch);
    console.log('Look at the code here: https://github.com/Frankyshtein/frankyshtein.github.io/tree/dev');
}());