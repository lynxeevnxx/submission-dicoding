const ul = document.querySelector('.articleContainer');
const listArticle = [
    {
    title : 'JAPANNEST',
    desc : 'Website ini merupakan sebuah website Landing Page sederhana yang saya buat dulu saat saya baru mencoba memasukin dunia Web Developer, landing page ini berbasis single page, jadi user hanya perlu meload website 1x saat pertama kali masuk kewebsite ini, teknologi yang saya gunakan hanya HTML, CSS, dan Javascript',
    img : './assets/img/japannest.png',
    link : 'https://japannest.glitch.me/'
    },
    {
        title : 'Quranku',
        desc : 'Quranku merupakan salah satu website yang saya buat dari hasil belajar saya, website ini merupakan sebuah website islami yang didalamnya terdapat sebuah content - content islami seperti  Al - Quran online, Kisah Nabi, Doa Sehari - Hari, Teknologi yang saya gunakan merupakan VueJs dan TailwindCSS untuk stylingnya.',
        img : './assets/img/quranku.png',
        link : 'https://alquranku.netlify.app/'
    },
    {
        title : 'Guess Card Game',
        desc : 'Website yang satu ini juga merupakan website buatan saya, yang dulu saya buat dari hasil belajar saya, website ini merupakan sebuah website menebak kartu sederhana yang dimana kita harus menebak kartu yang diminta dan diberikan kesempatan yang terbatas, Teknologi yang saya gunakan merupakan ReactJS dan TailwindCSS untuk stylingnya',
        img : './assets/img/cardgame.png',
        link : 'https://kyocardgame.netlify.app/'
    },
    {
        title : 'Grouping it !',
        desc : 'Grouping it merupakan salah satu website saya juga, yang saya buat beberapa wakt yang lalu dari hasil belajar saya juga, website tersebut merupakan sebuah website berbasis SPA (Single Page App.) yang memungkinkan kita mengelompokan beberapa individu secara acak dan dapat menentukan ketua dari setiap kelompok yang dibuat.',
        img : './assets/img/grouping.png',
        link : 'https://kyo-grouping.netlify.app/'
    }
]

function appendList () {
    listArticle.forEach(lst => {
        let liEl = document.createElement("li");
        let h3 = document.createElement('h3');
        let h4 = document.createElement('p');
        let anchorEl = document.createElement('a')
        let divEl = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', `${lst.img}`);
        anchorEl.setAttribute('href', `${lst.link}`);
        anchorEl.setAttribute('target','_blank');
        anchorEl.textContent = 'Click Disini !'
        h3.textContent = lst.title
        h4.textContent = lst.desc
        divEl.appendChild(h3);
        divEl.appendChild(h4);
        divEl.appendChild(anchorEl);
        liEl.appendChild(img);
        liEl.appendChild(divEl);
        
        
        ul.appendChild(liEl)

    })

    
}

appendList()


const navLists = document.querySelectorAll('nav li');

for (list of navLists) {
    list.addEventListener('click', (e) => {
        navLists.forEach(list => {
            console.log(list.id = '');
        })

        e.target.parentElement.id = 'active'
        
    })
}

