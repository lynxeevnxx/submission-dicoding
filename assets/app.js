const ul = document.querySelector('.articleContainer');
const listArticle = [
    {
    title : 'hahahaha',
    desc : 'lorem loremloreml oremloremloremloremloremloremloremloremloremloremloremloremloreml',
    img : './assets/img/header.jpg'
    },
    {
        title : 'hahahaha',
        desc : 'lorem loremloreml oremloremloremloremloremloremloremloremloremloremloremloremloreml',
        img : './assets/img/header.jpg'
    },
    {
        title : 'hahahaha',
        desc : 'lorem loremloreml oremloremloremloremloremloremloremloremloremloremloremloremloreml',
        img : './assets/img/header.jpg'
    }
]

function appendList () {
    listArticle.forEach(lst => {
        let liEl = document.createElement("li");
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let divEl = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', `${lst.img}`)
        h3.textContent = lst.title
        h4.textContent = lst.desc
        divEl.appendChild(h3);
        divEl.appendChild(h4);
        liEl.appendChild(img);
        liEl.appendChild(divEl);
        
        
        ul.appendChild(liEl)

    })

    
}

appendList()