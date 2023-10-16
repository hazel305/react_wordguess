//map grammar

let arr=['a','b','c'];
let list = arr.map(function(item, idx){
    let title = item +'항목';
    return`<li key={item.idx}>${title}</li>`;
})

let list2 = arr.map((item)=>`<li>${item}</li>`);


console.log(list);
console.log(list2);
