import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        query: ""
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.query)
        this.props.handleSubmit(this.state.query)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.query} ></input>
            </form>
        )
    }
}

export default GifSearch