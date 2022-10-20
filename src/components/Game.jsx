import React from 'react';

const Game = ({field,hendelClicl}) => {
    return <div className='game'>
        {field.map(i=><div 
        key={i.id}
        onClick={()=>hendelClicl(i)}
        className = {`itemGame 
        ${!i.visible && 'hide'} 
        ${i.found && 'found'}`}
        >{i.value}</div>)}
    </div>

};

export default Game;