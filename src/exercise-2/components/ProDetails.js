import React, {Component} from 'react';

class ProDetails extends Component {
    state={
        data:[
            "bicycle", {
                "id": 1,
                "name": "Bicycle",
                "price": 30,
                "quantity": 15,
                "desc": "Bicycle is Good"
              },
              "TV", {
                "id": 2,
                "name": "TV",
                "price": 40,
                "quantity": 16,
                "desc": "TV is good"
              },
              "pencil", {
                "id": 3,
                "name": "Pencil",
                "price": 50,
                "quantity": 17,
                "desc": "Pencil is good"
              }
        ]
    }
    
  render() {
    return (
      <div className="proDetails">
          console.log({this.props});
        <p>Product Details:</p>

        {this.state.data.map(e=>{
            if(e.id===this.props.match.params.id){
                return (
                <div>
                    <p>Name:{e.name}</p>
                    <p>Id:{e.id}</p>
                    <p>Price:{e.price}</p>
                    <p>Quantity:{e.quantity}</p>
                    <p>Desc:{e.desc}</p>
                    <p>URL:{this.props.match.url}</p>
                </div>)
            }
            return "123"
        })}
      </div>
    );
  }
}

export default ProDetails;
