const someTask = (miliseconds) => {
    return new Promise((resolve, reject) => {
        if (miliseconds < 0) {
            return reject(new Error(`Miliseconds cannot be less than 0`))
        }
        setTimeout(() => {
            return resolve(`res`)
        }, miliseconds);
    })
}
(async () => {
    try {
        //! need to process 9 tasks
        let miliseconds = [100, 200, 300, 400, 500,-1, 600, 700, 800, 900]
        //! start of que logic
        let milisecondsToProcess = miliseconds.splice(0, 2) //* make batch of 2 tasks
        while (milisecondsToProcess.length > 0) {
            let data = await Promise.all(milisecondsToProcess.map(mili => {
                return someTask(mili).catch(e=> `errored`)
            }))
            console.log(data);
            milisecondsToProcess = miliseconds.splice(0, 2) //* update batch with next tasks
        }
    } catch (error) {
        console.log(error.message);
    }
})()