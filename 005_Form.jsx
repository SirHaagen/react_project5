
export function Form(){

  let data;

  const handleChange= (e)=> data= e.target.value;

  const handleClick= ()=>{
    if(!data) console.log("Write something")
    else console.log(data);
  }
  
  return(<>
    <input type="text" placeholder="Write something!" onChange={handleChange}/>
    <button onClick={handleClick}>Click Here</button>
  </>)
}