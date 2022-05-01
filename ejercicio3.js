function numeroPar(){
    for (let i = 1; i < 101; i++) {
       if(i %2 === 0){
           console.log('Este número es par ' + i)
       }else{
           console.log('Este número es impar ' + i)
       }
        
    }
}

numeroPar()