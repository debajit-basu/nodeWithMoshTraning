
const p = new Promise((resolve, reject) => {
    //do some async work
    const flag = true;
    if(flag){
        setTimeout(() => {
            resolve(1);
        },2000);  
    }else{
        setTimeout(() => {
            reject(new Error('flag not true'));
        }); 
        
    }
    
});

p.then((res) => {
    console.log('response' , res);
}).catch((err) => {
    console.log('Error' , err.message);
})