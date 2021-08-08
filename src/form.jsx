
let form=(props)=>{
    return(
        <div>
            <button onClick={()=>{
                if(props.theme==="Light"){
                    props.handleTheme("Dark");
                }else if(props.theme==="Dark"){
                    props.handleTheme("Light");
                }
                }}>Theme-{props.theme}</button>
            <input type="text" placeholder="Name" onChange={(e)=>{props.handleName(e.currentTarget.value)}}></input>
            <input type="text" placeholder="Email" onChange={(e)=>{props.handleEmail(e.currentTarget.value)}}></input>
            <input type="number" placeholder="Number" onChange={(e)=>{props.handlePhone(e.currentTarget.value)}}></input>
         </div>
    );
}
export default form;