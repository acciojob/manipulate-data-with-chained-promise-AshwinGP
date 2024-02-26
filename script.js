var arr = [1, 2, 3, 4];

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let oddElements = arr.filter(element => element % 2 == 0);
            resolve(oddElements.join(","));
        }, 1000);
    });
}

function promiseMUL() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let evenElements = arr.map((element)=>{
				 if(element % 2 === 0 ){
				return element * 2 }})
            resolve(evenElements.join(","));
        }, 2000);
    });
}

promise()
    .then(res => {
        document.getElementById("output").textContent = res;
        return promiseMUL();
    })
    .then(res => {
        document.getElementById("output").textContent = res;
    })
    .catch(err => console.log("err", err));