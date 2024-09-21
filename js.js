function andar(){
    i1 = Number(document.getElementById('inicio').value)
    f1 = Number(document.getElementById('fim').value)
    p1 = Number(document.getElementById('passos').value)
    res = document.getElementById('res')
    res2 = document.getElementById('res2')

    res.innerText = 'resultado:'

    passos = ''

    if(i1>f1){
        res2.innerHTML='o andador começou muito a frente do inicio'
    }

    else if(f1<p1){
        res2.innerHTML='muitos passos para o andador andar'
    }

    else if(i1>0 && f1>0){
    if (isNaN(p1) || p1 <= 0) {
        window.alert('Passos inválido, considerando que passos seja igual a 1');
        p1 = 1;
    }
    for(let c=i1;c<=f1;c+=p1){
        passos+=c+' \u{1F449} '
    }
    res2.innerHTML='passos: '+passos.trim()+"\u{1F3C1}"
    }

    else{
        res2.innerHTML='impossivel contar'
    }
}