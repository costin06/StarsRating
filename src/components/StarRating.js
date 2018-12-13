import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {
state={
  rating:0
}

  fiveStar=()=>{
    var stars = [];
     for(var i=1;i<6;i++){
      stars.push(<Star onc={this.clickStar} id={i} selected={i<=this.state.rating?true:false}  key={i.toString()} />);
     }
    
return stars;
  }

  clickStar=(id)=>{
      this.setState({rating:id})
  }


  render() {
    return (
      <ul className="course--stars">
        {this.fiveStar()}
      </ul>
    );
  }
}

export default StarRating;