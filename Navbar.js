import React from 'react';
 class Navbar extends React.PureComponent{

   constructor(props){

     super(props);

    const{kolonolustur,kartolustur}=this.state
   }
  

render(){ 
    return (
    <div>
    <div >{this.state.kolonolustur}</div>
    <div>{this.state.kartolustur}</div>
    
    </div>)
    }

}
export default Navbar;