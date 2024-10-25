async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    const productsArr = products.map(elemento => Object.entries(elemento));
    console.log(productsArr)
    const productsArrSliced = productsArr.slice(0,10);
    products.forEach(element => {
        const randomData = (min, max) => Math.floor(Math.random() * max - min + 1) + min;
        const randInt = randomData(1, productsArr.length);
        const randIndex = randInt;
        for(i = 0; i < productsArrSliced.length; i++){
            console.log("lok")
            if(element.id == i){
                const box = document.createRange().createContextualFragment(`
                    
                    <div class="box-${i}">
                        <img src="${productsArr[randIndex][5][1]}" alt="">
                    </div>
                    
                    `)
                    const showcase = document.getElementById('showcase');
                    showcase.append(box);
            } 
        }
    });
}

getData()