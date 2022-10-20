import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Game from './components/Game';
import { genereteField } from './helper/genereteField';

function App() {
  const [field,setField] = useState([])
  const [choiceItem,setChoiceItem]=useState([])

  useEffect(()=>{
    setField(genereteField(60,16))
    setTimeout(() => {
      setField(prev=>(prev.map(i=>({...i,visible:false}))))
    }, 5000);
  },[])

  const chengeField = useCallback((checkValue,boolean)=>{
    setField(prev=>prev.map(i=>{
      if(i.id === checkValue.id){
        return({...i,visible:boolean})
      }return i
    }))
    return
  },[])// useCallback сдесь толком не нужен просто продемонстрировать что я знаю про его существование 

  useEffect(()=>{
    if(!choiceItem[0]) return
    if(choiceItem[1]&&(choiceItem[0].id===choiceItem[1].id)){
      setChoiceItem([])
      chengeField(choiceItem[0],false)
      return
    }
    if(choiceItem[0]&& !choiceItem[1]){
      chengeField(choiceItem[0],true)
      return
    }
    if(choiceItem[0].value!==choiceItem[1].value){
      setTimeout(()=>chengeField(choiceItem[0],false),100)
      setTimeout(()=>chengeField(choiceItem[1],false),100)
      chengeField(choiceItem[1],true)
      setChoiceItem([])
      return
    }
    if(choiceItem[0].value===choiceItem[1].value){
      chengeField(choiceItem[1],true)
      setChoiceItem([])
      return
    }
  },[choiceItem])

  const choseNumber=useCallback((item)=>{
    setChoiceItem(prev=>[...prev,item])
  },[]) // useCallback сдесь толком не нужен просто продемонстрировать что я знаю про его существование 

  return <div className="App">
      <h1>Mahjong</h1>
      <Game 
      field = {field}  
      hendelClicl = {choseNumber}
      />
    </div>
} 

export default App;
