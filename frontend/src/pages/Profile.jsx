import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate=useNavigate();

    const user=JSON.parse(localStorage.getItem("user"));

    const logout=()=>{

        localStorage.clear();

        navigate("/");

    }

    return(

<div className="container profile">

<h1>My Profile</h1>

<h3>Name : {user?.name}</h3>

<h3>Email : {user?.email}</h3>

<button className="btn" onClick={logout}>

Logout

</button>

</div>

    )

}

export default Profile;