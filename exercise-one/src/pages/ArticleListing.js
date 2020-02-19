import React from 'react';

import ArticleCard from '../components/ArticleCard';

import Data from '../components/Data';

function ArticleListing(){
    console.log('data', Data); 
    return(
        <div class="articleListing">
            <header>
                <h1>Articles</h1>
            </header>
            <main>
                {Data.map((article, i)=>( //mapping over objects in Data.json
                    <ArticleCard 
                        key={i} 
                        articleData={article} //assigning props in ArticleCard to object in Data.json
                    />
                ))}
            </main>
        </div>
    )
}

export default ArticleListing;