function numeroPar(){
    for (let i = 0; i < 10; i++) {
        switch(i){
            case 2: 
                console.log('El ' + i + ' es un número primo' )
            break;
            case 3: 
                console.log('El ' + i + ' es un número primo' )
                break;             
            case 5: 
                console.log('El ' + i + ' es un número primo' )
                break;
            case 7: 
                console.log('El ' + i + ' es un número primo' )
                break;
                        
            default:
                console.log(i)
            }           
    }
}

numeroPar()