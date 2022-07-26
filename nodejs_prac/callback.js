const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    
    const first = result;

    readFile('./content/subfolder/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;

        readFile('./content/subfolder/text.txt', 'utf-8', (err, result) => {
            if(err){
                console.log(err);
                return;
            }

            const final = result;

            writeFile('./content/subfolder/result-sync.txt', `Here is the result ${first}, ${second} and ${final}`, (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }

                console.log(result);
            })
        })
    })
})