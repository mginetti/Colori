let products = document.getElementById('products');

let colors = [
    {
        name: "Rosso",
        r: 255,
        g: 0,
        b: 0
    },
    {
        name: "Verde",
        r: 0,
        g: 255,
        b: 0
    },
    {
        name: "Blu",
        r: 0,
        g: 0,
        b: 255
    },
]

colors.forEach(element=>{
    let product = document.createElement('div')
    product.classList.add('product')
    let icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-fill-drip');
    icon.style.color = 'rgb('+element.r+', '+element.g+', '+element.b+')';
    let h1 = document.createElement('h1');
    let title = document.createTextNode(element.name)
    h1.appendChild(title)
    console.log(products)
    product.appendChild(h1);
    product.appendChild(icon);
    products.appendChild(product);
})