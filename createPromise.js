const someTask = (miliseconds)=>{
    return new Promise((resolve,reject)=>{
        if(miliseconds < 0){
            return reject(new Error(`Miliseconds cannot be less than 0`))
        }
        setTimeout(() => {
            return resolve({data:{}})
        }, miliseconds);
    })
}
someTask(200)
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log(error.message);
})
someTask(-1)
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log(error.message);
})