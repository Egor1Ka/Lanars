const shuffle = arr =>arr.sort(()=>0.5 - Math.random())

export const genereteField=(maxNumber,length)=>{
    let arr,unic,newItem;
    arr = [];
    while (arr.length <=length-1) {
      do {
        unic = true;
        newItem = Math.floor(Math.random() * maxNumber + 1);
        for (let i = 0; i < arr.length; i++) {
          if (newItem == arr[i]) {
            unic = false;
            break;
          }
        }
      } while (!unic) 
      arr.push(newItem);
    }
    return shuffle([...arr,...arr]).map((i,index)=>({value:i,visible:true,id:index+1}))
}