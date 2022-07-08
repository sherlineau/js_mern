import React, { Component } from 'react'

export class ClassStateComponent extends Component {
    constructor(props) {
        super(props)
        //state is an object, don't forget commas between key-value pairs
        //this.state can not be renamed
        //we can put anything we want into the state object though
        this.state = {
            count: 0,
            likes: props.propsLike
        }
    }

    render() {
        const alert2 = ()=> {
            alert("Second alert test")
        }

        const addLikes = () => {
            this.setState({
                likes: this.state.likes + 1 //similar to incremement
            })
        }
        
        return (

            <div>
                <h1>Class State Demo</h1>
                <button onClick={()=>alert("Hi")}>Alert me!</button>
                <button onClick={()=>alert2()}>Alert me!</button>

                <p>
                    {/* this.setState( { object i want to change and bind } )   <- dont forget the () and {} */}
                    <button onClick={()=> this.setState({count: this.state.count+1})}>Add count</button>
                    <button onClick={addLikes}>Add likes</button>
                </p>

                <h1>Count: {this.state.count} </h1>
                <h1>Likes: {this.state.likes}</h1>
            </div>
        )
    }
}
