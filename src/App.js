import React, {Component} from 'react'

class App extends Component {
    
    state = {
        astros: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(results => {
                this.setState({
                    astros: results
                })
            })
    }
    
    render(){
        return(
            <div>
                We're working. 
            </div>
        )
    }
}

export default App;