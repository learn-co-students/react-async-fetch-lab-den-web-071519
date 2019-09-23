import React, { Component } from 'react'

export default class App extends Component {

    state = {
        spacePeople: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(({people}) => this.setState({spacePeople: people })
        )
    }
    render() {
        return (
            <div>
                {this.state.spacePeople.map( (person) =>  <h2>{person.name}</h2>)}
            </div>
        )
    }
}
