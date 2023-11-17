import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";

function Aboutus() {
  const navigate = useNavigate();
  function gotoHomePage(){
    navigate('/')
  }
  return <div>
    <Navbar></Navbar>
  <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 my-4">
          <h1>About Us</h1>
          <p style={{textAlign:"justify"}}>
            In a normal website or web application that does not use any
            client-side frameworks when a user clicks on any link a request is
            made to the server and a response containing the information to be
            shown is sent back by the server. <br/>
          </p>
          <p style={{textAlign:"justify"}}>But in a SPA, When the user needs
            a new page the current component is destroyed and a new component is
            loaded. But there will be no URL changes. It makes the user really
            hard to navigate through the application as well as they will not be
            able to bookmark a particular page so we split components and can be
            accessed with different routes.</p>
            <Link to="/" className="btn btn-info">Go Home</Link>&nbsp;
            <button className="btn btn-primary" onClick={gotoHomePage}> Goto Home Page</button>
        </div>
      </div>
    </div>
    </div>
}

export default Aboutus;
