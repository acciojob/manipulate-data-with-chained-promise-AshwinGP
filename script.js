//your JS code here. If required.
var arr=[1,2,3,4]
function promiseMul(){
	return new Promise((resolve,reject)=>{
       setTimeout(()=>{
		let mul=arr.map((element)=>element%2===0? element*2:element);
		   resolve(mul.join(","));
	},2000)
});
}
	function promise(){
	return new Promise((resolve,reject)=>{
	  setTimeout(()=>{
		   let oddElements = arr.filter(element => element % 2 !== 0);
            resolve(oddElements.join(", "));
	},1000)
});
}
   promise()
	   .then((res)=>{
	   document.getElementById("output").textContent=res;
	   return promiseMul()
   }).then((res)=>{
	   document.getElementById("output").textContent=res;
   }).catch((err)=>console.log("err",err));
  
// Promises.all(promise,promiseMUL).then((res)=>{
// 	document.getElementById("outpt").textContent=res;
// }).catch((err)=>console.log("err",err));
