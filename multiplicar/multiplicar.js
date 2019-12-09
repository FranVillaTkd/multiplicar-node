const fs = require('fs');

let listarTabla = (base, limite) =>{
   
    if(!Number(base)){
        console.log(`El valor ${base} no es un numero`);
        return
    }

    

    for(let i=0 ;i<=limite;i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
    
}

let crearArchivo = (base ,limite) =>{

    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`El valor ${base} no es un numero`);
            return
        }
        if(!Number(limite)){
            reject(`El valor ${limite} no es un numero`);
            return
        }

        let data = '';

        for(let i=0 ;i<=limite;i++){
            data+=`${base} * ${i} = ${base*i}\n`;
        }
        
        
        fs.writeFile(`tablas-autogeneradas/tabla-del-${base}-con-limite-${limite}.txt`,data,err=>{
            if (err){
                reject(err);
            }else{
                resolve(`El archivo tabla-del-${base}con-limite-${limite}.txt`);
            }
        });

    })

}
module.exports = {
    crearArchivo,
    listarTabla
}

