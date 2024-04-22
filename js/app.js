const entrada = document.getElementById('entrada');
const place = document.getElementById('place');


let atividades =[]
let n = 1

function Atualizar(atividades){
    place.innerHTML = ''
    atividades.forEach(e => {
        place.innerHTML += '<div id="'+e.id+'">'+e.faz+'</div>';
    });
};

window.addEventListener('keydown',(e)=>{
    if(e.code == "Enter" && entrada.value !== ""){
    atividades.push({id:n,faz:entrada.value})
    Atualizar(atividades);
    n++;
    };
})

window.addEventListener('click',(e)=>{
    const filtragem = atividades.filter((element)=> element.id !== parseInt(e.target.id));
    atividades = filtragem
    Atualizar(atividades);
})

