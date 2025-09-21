import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams();

    return(
        <div>User : {userid}
        {console.log(userid)}</div>
        
    )
}

export default User;