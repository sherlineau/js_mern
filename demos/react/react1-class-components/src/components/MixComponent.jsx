import React, { Component } from 'react'

export default class MixComponent extends Component {
    constructor(props) {
        super(props)
        //state is an object, don't forget commas between key-value pairs
        //this.state can not be renamed
        //we can put anything we want into the state object though
        this.state = {
            count: 0,
            likes: 0
        }
    }

    render() {
        const addLikes = () => {
            this.setState({
                likes: this.state.likes + 1 
            })
        }
        
        return (

            <div>
                <h1>State Demo</h1>
                <p>
                    {/* this.setState( { object i want to change and bind } )   <- dont forget the () and {} */}
                    <button onClick={()=> this.setState({count: this.state.count+1})}>Add count</button>
                    <button onClick={addLikes}>Add likes</button>
                </p>

                <h1>Count: {this.state.count} </h1>
                <h1>Likes: {this.state.likes}</h1>
                <h1>Likes from props: {this.props.likes}</h1>
            </div>
        )
    }
}

