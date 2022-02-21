async function apiCall(url) {

    try {
        let res = await fetch(url);
        let data = await res.json();
        return(data);
    } catch (error) {
        console.log(error);
    }


}
/*
author: null
content: "Life Insurance Corporation of India's initial public offering (IPO) is expected to file its Draft Red Herring Prospectus (DRHP) on February 11, sources told CNBC-TV18.\r\nIt has learned that the Insura… [+914 chars]"
description: "LIC IPO: The quantum of divestment and EV numbers will be mentioned in the DRHP."
publishedAt: "2022-02-11T01:27:00Z"
source: {id: null, name: 'Moneycontrol'}
title: "LIC Public Issue | Filing with SEBI likely today, IRDAI clears draft papers - Moneycontrol.com"
url: "https://www.moneycontrol.com/news/business/ipo/lic-ipo-filing-with-sebi-likely-on-february-11-irdai-clears-draft-papers-8070891.html"
urlToImage: "https://images.moneycontrol.com/static-mcnews/2022/02/LIC-BUilding-770x433.jpg"
*/

function appendArticles(articles, main) {

    main.innerHTML = null;

    articles.forEach(el => {

        let div = document.createElement('div');
        div.id = "news";
        let image = document.createElement('img');
        image.src = el.urlToImage;
        let title = document.createElement('h4');
        title.innerText = el.title;
        let description = document.createElement('p');
        description.innerText = el.description;
        div.append(title,description,image);
        div.onclick = ()=>{
            localStorage.setItem('article',JSON.stringify(el));
            window.location.href = 'news.html'
        }
        main.append(div);
        
    });

}



export { apiCall, appendArticles }