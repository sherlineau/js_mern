// 1. import React
import React from 'react'


//for class components we would need to render() -> functions just need to return
const FunctionalPropsComponent = ( props )=> {

    //we can still destructure props
    const {episodes, hashtags, isRecommended} = props

    return (
        <fieldset>
            <legend> FunctionalPropsComponent.jsx</legend>
            {/* info passed from App.js -> do not need this since it is a function/ not a class -> class would create an instance so we would need this*/}
            {/* props is passed in as an argument */}
            <h1>Title: {props.title} </h1>
            <h3>total episodes: {episodes}</h3>
                {/* ternary opeartor is recommended true? render yes */}
                <h3>Recommended? {isRecommended?"Yes":"No"}</h3>
                <h3>Hastags:</h3>
                <ul>
                    {
                        hashtags.map((eachTag, i) => {
                            return <li key={i}>{eachTag}</li>
                        })
                    }
                </ul>
        </fieldset>
    )
}

//remember to export
export default FunctionalPropsComponent