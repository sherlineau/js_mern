import React, { Component } from 'react'

export default class PropsComponent extends Component {
    render() {
        const {title, episodes , isRecommended, hashtags} = this.props
        return (
            <fieldset>
                <legend> PropsComponent.jsx</legend>
                <h3> Title: {title}</h3>
                <h3>total episodes: {episodes}</h3>
                {/* ternary opeartor is recommended true? render yes */}
                <h3>Recommended? {isRecommended?"Yes":"No"}</h3>

                {/* regular arrow function */}
                <ul>
                    {
                        hashtags.map((eachTag, i) => {
                            return <li key={i}>{eachTag}</li>
                        })
                    }
                </ul>

                {/* implicit arrow function with no return keyword */}
                <ul>
                    {
                        hashtags.map((eachTag,i) => <li key={i}>{eachTag}</li>)
                    }
                </ul>
            </fieldset>
            
        )
    }
}
