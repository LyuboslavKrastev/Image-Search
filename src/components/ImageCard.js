import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      spans: 0
    }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    let autoRowHeight = 10;
    const spans = Math.ceil(height / autoRowHeight);

    this.setState({
      spans // used for the grid-row-end CSS property
    })
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
