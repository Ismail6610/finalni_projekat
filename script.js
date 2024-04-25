
document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.container');

    function displayNews(news) {
        newsList.innerHTML = '';

        news.forEach(newsItem => {
            const newItem = document.createElement('div');
            newItem.classList.add('news');

            newItem.innerHTML = `
                <div class="news-container">
                <div class="small-image-overlay"></div>
                    <img src="${newsItem.imageUrl}" alt="Image">
                    <div class="news-content">
                        <h2>${newsItem.title}</h2>
                        <p>${newsItem.description}</p>
                        <a href="${newsItem.link}" class="read-more">Read more</a>
                    </div>
                </div>
            `;

            newsList.appendChild(newItem);
        });
    }

    function filterNews(search) {
        const filteredNews = newsData.filter(newsItem => newsItem.title.toLowerCase().includes(search.toLowerCase()));
        displayNews(filteredNews);
    }

    document.getElementById('search').addEventListener('input', function() {
        const search = this.value.trim();
        if (search === '') {
            displayNews(newsData);
        } else {
            filterNews(search);
        }
    });

    const newsData = [
        {
            imageUrl: "./assets/sudar.jpg",
            title: "SUDAR NA CESTI",
            description: "U jutarnjim satima desila se nesreća...",
            link: "./vijesti/sudar.html"
        },
        {
            imageUrl: "./assets/.jpg",
            title: "BEZOBRAZNI TAKSISTA",
            description: "Taksista optuzen za pljackanje zene(36) u Sarajevu...",
            link: "./vijesti/taksi.html"
        },
        {
            imageUrl: "./assets/mir.jpg",
            title: "POVIJESNI MIRNI DOGOVOR OKONČAVA DESETLJEĆA POLITIČKIH NAPETOSTI",
            description: "Danas je svijet svjedočio historijskom trenutku...",
            link: "./vijesti/dogovor.html"
        },
        {
            imageUrl: "./assets/mjesec.jpg",
            title: "NOVA OTKRICA U ISTRAZIVANJU SVEMIRA",
            description: "Uzbudljiva istraživanja  o svemiru ...",
            link: "./vijesti/svemir.html"
        },
        {
            imageUrl: "./assets/autoput.jpg",
            title: " NAJNOVIJI PLANOVI ZA IZGRADNJU NOVOG AUTOPUTA   ",
            description: "...",
            link: "./vijesti/autoput.html"
        },
        {
            imageUrl: "./assets/.jpg",
            title: "UZNEMIRUJUCI NAPAD NA ZENU",
            description: " Grad je u šoku nakon što je jedna žena...",
            link: "./vijesti/napad.html"
        },
    ];

    displayNews(newsData);
});









document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.querySelector('.bigContainer');
    

    function displayNews(news) {
        newsList.innerHTML=' ';

        news.forEach(newsItem2 => {
            const newItem = document.createElement('div');
            newItem.classList.add('news');

            newItem.innerHTML = `
            <div class="bigNews-container">
            <div class="image-overlay"></div>
                <img src="${newsItem2.imageUrl}" alt="Image">
                <div class="bigNews-content">
                    <h2>${newsItem2.title}</h2>
                    <p>${newsItem2.description}</p>
                    <a href="${newsItem2.link}" class="bigRead-more">Read more</a>
                </div>
            </div>
            `;

            newsList.appendChild(newItem);
        });
    }

    

    


    const newsDataBig = [
        {
            imageUrl: "./assets/zeljo.jpg",
            title: "HAOS NA GRBAVICI",
            description: "Zeljeznicar pobjedio rivala sa nevjerovatnih 12-0",
            link: "./vijesti/sudar.html"
        },
    ];

    displayNews(newsDataBig);
});

