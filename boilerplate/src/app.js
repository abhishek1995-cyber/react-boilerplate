
import React from 'react';
import ReactDOM from 'react-dom'
import '../style/style.scss'

class App extends React.Component{
    state = {
        count: 0
    }

    render(){
       return <h1>Hello {this.state.count}</h1>
    }
}

ReactDOM.render(<App />,document.getElementById('root'))