import React from 'react';

function ArticleCard({articleData}){
    console.log('article card article', articleData); //naming console.logs makes life easier -- this one is named 'data'
    return(
        <article className="articleCard">  {/* in react it is className  */}
            <div className="articleCard__image" style={{
                padding: '20px', /* this is js not css */
                marginLeft: '20px'
            }}>
                <img src={articleData.image.url} alt={articleData.image.alt}/>
            </div>
            <div className="articleCard__text">
                <h2>{articleData.title}</h2>
                <p>{articleData.publishedDate}</p>
                <p>{articleData.blurb}</p>
                <a href={`article/${articleData.id}`}>Read More</a>
            </div>
        </article>

    )
}

export default ArticleCard;