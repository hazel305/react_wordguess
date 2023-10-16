//map grammar

let arr=['a','b','c'];
let list = arr.map(function(item, idx){
    let title = item +'항목';
    return`<li key={item.idx}>${title}</li>`;
})

let list2 = arr.map((item)=>`<li>${item}</li>`);


console.log(list);
console.log(list2);


let arr1 = [1,2];
arr.push(3);

let arr2= [3,4];

let arrnew = [arr1[0],arr1[1],arr2[0],arr2[1]];

let arrnew2 = arr1.concat(arr2);

let arrnew3 = [].concat(arr1,arr2);

let arrnew4 = [...arr1, ...arr2];