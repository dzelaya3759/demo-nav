import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/css/home.css'

class Carouselslide extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {
        return (
          <div className="app">

<Carousel className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH37wGOjrB3sY2StaZGa7fUMAdva3OU1xotA&usqp=CAU "
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxm3hxzglMN8seUbsgDzfUUb2s9U2ndqkmYA&usqp=CAU
      "
      alt="Second slide"
    />

    <Carousel.Caption className = "caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcy_lKjkzfSJwnWPQRk23gdy4iY5RQahsmfg&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
    );
  }
}

export default Carouselslide;