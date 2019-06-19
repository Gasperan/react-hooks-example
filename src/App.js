import React from 'react'
import Card from './Card'

class App extends React.Component {
  state = {
    value : '',
    width :window.innerWidth 
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentDidMount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleOnchange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Card>
       <span>
        Width: {this.state.width}
      </span>
      <input
        value={this.state.value}
        onChange={this.handleOnchange}
      />
    </Card>
    )
  }
}

export default App;
