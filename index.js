import React, { Component } from 'react';
import { render } from 'react-dom';
import Product from "./components/Product";
import './style.css';

const products=[
{

  id:1,
  name:"Italy",
  description:"Italy",
  img:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121206-italy---travel-destination---shutterstock-517522957.jpg",
  price:1000

},

{

  id:2,
  name:"UK",
  description:"UK",
  img:"https://www.cbronline.com/wp-content/uploads/2017/02/UK.jpg",
  price:1000

},

{

  id:3,
  name:"Canada",
  description:"Canada",
  img:"https://www.skyluxeroofing.com/wp-content/uploads/2018/06/burlington.jpg",
  price:1000

},

{

  id:5,
  name:"Switzerland",
  description:"Switzerland",
  img:"https://img.emg-services.net/HtmlPages/HtmlPage4239/switzerland-header-2.jpg",
  price:1000

},

{

  id:6,
  name:"Spain",
  description:"Spain",
  img:"https://djq098wr042w0.cloudfront.net/media/1madrid.jpg",
  price:1000

}


];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      cart:[
        {
         id:1,
  name:"Italy",
  description:"Italy",
  img:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_412,c_fill,g_auto,h_232,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121206-italy---travel-destination---shutterstock-517522957.jpg",
  price:1000,
  units: 2


      }
      ]
    };
  }

handleAddFunc(product){
  //console.log("clicked",product);
  //console.log("this",this.state);
  const existingProduct = this.state.cart.filter(p => p.id === product.id);

  if(existingProduct.length > 0){
    const withoutExistingProduct = this.state.cart.filter(p => p.id !==product.id);
    const updatedUnitsProduct = {
      ...existingProduct[0],
      units: existingProduct[0].units + product.units
    };
    this.setState({
        //cart:[...this.state.cart,existingProduct[0]]
        cart:[...withoutExistingProduct,updatedUnitsProduct]
    });

  } else {
     this.setState({
        //cart:[...this.state.cart,existingProduct[0]]
        cart:[...this.state.cart,product]
    });
  }
  
}

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
       <ul>
       {
         this.state.cart.map(c => <li>{c.name} | {c.units} tickets </li>)
       }
       </ul>
     
      { 
      products.map(p=> <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
        }
      

        
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
