import React, { Component } from "react";
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    handleSubmit = (input = "") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=gwSvmevhTVE8OFKIuZ1dL7LGpoiiSB70&rating=g`)
        .then(r => r.json())
        .then(json => {
            // debugger
            const threeGifs = json.data.slice(0,3)
            this.setState({gifs: threeGifs})
        })
    }

    componentDidMount() {
        this.handleSubmit()
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default GifListContainer