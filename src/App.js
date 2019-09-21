import React, { Component } from 'react'

export default class App extends Component {
    
    state = {
        people: []
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(res => this.setState({people: res.people}))
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.people.map((person, index) => <h1 key={person.id}>{person.name}</h1>)}
            </div>
        )
    }
}
