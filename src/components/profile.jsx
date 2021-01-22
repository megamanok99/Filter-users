function Profile(props){
    return(
        <div className="card">
         {
             props.profile.map((obj,i)=>(
                <div className="cards" key={obj.image} >
  <img src={obj.image} className="card-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{obj.title}</h5>
    <p className="card-text">{obj.description}</p>
    
  </div>
</div>
             ))}
         
         
       </div>
    
    );
             }
    export default  Profile;