import React from 'react';
 class Card extends React.PureComponent{

render(){ 
  
    const{aciklama,kisi,zorluk,renk}=this.pros

    return (
    <div className="card">
    <p className="Aciklama">{aciklama}</p>
    <div className="Kisi İsmi">{kisi}</div>
    <div className="Zorluk Derecesi">{zorluk}</div>
    <div className="Renk Kodu"> {renk}</div>
    </div>)
    }

}
export default Card;