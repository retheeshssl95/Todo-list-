import { useParams } from "react-router-dom"

function Greeting(){
    const x = useParams();

    return <h2>Welcome to {x.name}</h2>
}

export default Greeting