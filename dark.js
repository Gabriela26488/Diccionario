const darkMode = document.querySelector('#darkMode');
const body = document.querySelector('body')

load();

darkMode.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'))
})

function load(){
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
    store('false');        
    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
    }
}

function store(value){
    localStorage.setItem('darkmode', value)
}