const entrada = document.getElementById('entrada');
const place = document.getElementById('place');
let atividades =[]
let n = 0

function Atualizar(atividades){
    place.innerHTML = ''
    let n = 0
    atividades.forEach(e => {
        place.innerHTML += '<div id="'+n+'">'+e.faz+'</div>';
        n++
    })
    
}

window.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13 && entrada.value !== ''){
    let id = n
    atividades.push({id:n,faz:entrada.value})
    Atualizar(atividades)
    n += 1
    
    }
    
})

window.addEventListener('click',(e)=>{

    let array = atividades.splice(e.target.id,e.target.id)
    Atualizar(atividades)
    
})

