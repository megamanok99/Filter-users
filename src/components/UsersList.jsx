function UsersList(props){

    return(
        
        <ul className="users">
         {
             
             props.users.filter(obj=>obj.name.toLowerCase().includes(props.value.toLowerCase()) ||
             obj.email.toLowerCase().includes(props.value.toLowerCase())
             
             ).map((obj)=>(
                <li className="users__item" key={obj.id}>
           <div className="users__item-name">{obj.name}</div>
           <div className="users__item-email">{obj.email}</div>
         </li>
             ))}
         
         
       </ul>
    
    );
}
export default UsersList;