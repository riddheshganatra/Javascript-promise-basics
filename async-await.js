const someTask = (miliseconds) => {
    return new Promise((resolve, reject) => {
        if (miliseconds < 0) {
            return reject(new Error(`Miliseconds cannot be less than 0`))
        }
        setTimeout(() => {
            return resolve({ data: {} })
        }, miliseconds);
    })
}
(async () => {
    try {
        let data = await someTask(200)
        console.log(data);

        data = await someTask(-1)
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }

})()