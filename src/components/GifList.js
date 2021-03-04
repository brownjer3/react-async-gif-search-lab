import React, { Component } from "react";

class GifList extends Component {
    renderGifs() {
        return this.props.gifs.map((gif) => <img key={gif.images.original.url} src={gif.images.original.url} alt={gif.images.original.url}></img>)
    }

    render() {
        return(
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}

export default GifList