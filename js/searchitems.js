const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("search-box");
const searchBar = document.querySelector(".searchBar");

let items=[

    //Fruits
    {link:'fruits.html', name:'orange', image:'image/product-1.png' },
    {link:'fruits.html', name:'apple', image:'image/product-14.png' },
    {link:'fruits.html', name:'mango', image:'image/product-15.png' },
    {link:'fruits.html', name:'watermelon', image:'image/product-3.png' },
    {link:'fruits.html', name:'banana', image:'image/product-16.png' },
    {link:'fruits.html', name:'guava', image:'image/product-17.png' },
    {link:'fruits.html', name:'pineapple', image:'image/product-18.png' },
    {link:'fruits.html', name:'grapes', image:'image/product-19.png' },
    {link:'fruits.html', name:'kiwi', image:'image/product-20.png' },
    {link:'fruits.html', name:'strawberry', image:'image/product-21.png' },

    //Vegetables
    {link:'vegetables.html', name:'onions', image:'image/product-2.png' },
    {link:'vegetables.html', name:'cabbage', image:'image/product-4.png' },
    {link:'vegetables.html', name:'potatoes', image:'image/product-5.png' },
    {link:'vegetables.html', name:'carrots', image:'image/product-7.png' },
    {link:'vegetables.html', name:'egg plant', image:'image/product-9.png' },
    {link:'vegetables.html', name:'broccoli', image:'image/product-10.png' },
    {link:'vegetables.html', name:'green lemon', image:'image/product-8.png' },
    {link:'vegetables.html', name:'cauliflower', image:'image/product-11.png' },
    {link:'vegetables.html', name:'lettuce', image:'image/product-13.png' },
    {link:'vegetables.html', name:'raddish', image:'image/product-12.png' },

    //Grains
    {link:'grains.html', name:'wheat', image:'image/product-22.png' },
    {link:'grains.html', name:'rice', image:'image/product-23.png' },
    {link:'grains.html', name:'barley', image:'image/product-24.png' },
    {link:'grains.html', name:'corn', image:'image/product-25.png' },

    {link:'grains.html', name:'yellow split lentils', image:'image/product-26.png' },
    {link:'grains.html', name:'green mung beans', image:'image/product-27.png' },
    {link:'grains.html', name:'navy beans', image:'image/product-28.png' },
    {link:'grains.html', name:'soya beans', image:'image/product-29.png' },

];

let resultList = [];

const searchList = (e) => {
    let inputword = e.target.value;
    
    if(inputword){
        filterList(inputword);
        displayList(resultList);
    }
}

const filterList = (inputKeyword) => {
    resultList = items.filter(
        (data) => data.name.toLowerCase().includes(inputKeyword.toLowerCase())
    );

    console.log(resultList);
}

function displayList(resultList){
    searchBar.style.borderRadius = `.5rem .5rem 0 0`;
    const content = resultList.map((data) =>{
        return `<a href="${data.link}">` + "<div class='listBox'>" + `<img src = "${data.image}"></img>` +"<i>" + (data.name) + "</i>"  + "</div>"+ `</a>`;
    });
    
    resultBox.innerHTML = "<div class='resultContainer'>" + content.join('') + "</div>";

    if(!resultList.length){
        resultBox.innerHTML = '';
        searchBar.style.borderRadius = `.5rem`;
    }
}

document.addEventListener('click' , (event) => {
    if(!event.target.closest('.searchbar') || !event.target.closest('.result-box')){
        resultBox.innerHTML = '';
        searchBar.style.borderRadius = `.5rem`;
    }
});
        

