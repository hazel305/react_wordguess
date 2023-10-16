//map grammar

let arr=['a','b','c'];
let list = arr.map(function(item){
    let title = item +'항목';
    return`<li>${title}</li>`;
})

let list2 = arr.map((item)=>`<li>${item}</li>`);


console.log(list);
console.log(list2);
