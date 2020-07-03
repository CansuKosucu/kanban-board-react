import React from 'react';



class Colomn extends React.PureComponent{
  

render(){ 
    const{yenikolonolustur,yenikartolustur}=this.state
    return (
    <div className="Colomn">
    <div>{yenikolonolustur}</div>
    <div>{yenikartolustur}</div>
    
    </div>)
    }
    
}
export default Colomn ;