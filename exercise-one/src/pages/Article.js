import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DATA from "../components/Data";
import ArticleItem from "../components/ArticleItem"

function Article(){
    const[article, setArticle] = useState({}); //can place default val in useState({}), 
    let {id} = useParams();
    //console.log("RENDERING", article)

    useEffect(() => {
        let dataArray = DATA.filter(article => article.id === id); //check array.filter mdn for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        //console.log("dataArray", dataArray);
        setArticle(dataArray[0]);
    }, [id]);

    
    //console.log("data", DATA);

    return(
        <div>
            <header 
            className = "articleHeader"
            style={{
                backgroundImage: `url(${article.image ? article.image.url: ""})` //turnary - cannot check depth on undefined object therefore will error out when article.image is undefined
            }}
            >
            <div className="articleHeaderWrapper">
                <h1>{article.title}</h1>
                <p>{article.publishedDate}</p>
                <p>{article.blurb}</p>
            </div>
            </header>
            <main className="articleContent">
                <div className="articleContentWrapper">
                    {article.articleText && article.articleText.map((text, i) => (
                        //<p key={i}>{text.data}</p>
                        <ArticleItem key={i} data={text.data} type={text.type} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Article;