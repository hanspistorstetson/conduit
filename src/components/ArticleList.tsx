import React from 'react'

interface IProps {
    articles: String[] 
}

const ArticleList = (props: IProps) => {
    if (!props.articles) {
        return <div className="articles-preview">Loading...</div>
    }

    if (props.articles.length === 0) {
        return (
           <div className="article-preview">No Articles here yet</div> 
        )
    }

    return <h1>Test</h1>
    
}

export default ArticleList