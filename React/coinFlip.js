function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            //   console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            // conditions to exit out of while loop
            if (headsCount === 5) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            }
            if (attempts > 100) {
                reject(
                    "Coin has been flipped 100 times and we still don't have 5 heads"
                );
            }
        }
    });
}
fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
console.log("When does this run now?");
