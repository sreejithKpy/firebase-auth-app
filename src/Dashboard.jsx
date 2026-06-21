import { auth } from "./firebase"
import { signOut } from "firebase/auth"

const Dashboard = () => {

    async function handleLogout(){
        await signOut(auth)
        alert("Logout Success")
    }
  return (
    <div>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard