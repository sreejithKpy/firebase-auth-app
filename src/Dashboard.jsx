import { auth } from "./firebase"
import { signOut } from "firebase/auth"
import { useAuth } from "./AuthContext"
const Dashboard = () => {
    const {user} = useAuth();
    async function handleLogout(){
        await signOut(auth)
        alert("Logged out")
    }
  return (
    <div className="dash-page-wrapper">
      <div className="dash-container">
        <div className="dash-header">
          <div className="dash-avatar">{user?.email ? user.email.charAt(0).toUpperCase() : "👤"}</div>
          <h2>Welcome Back</h2>
          <p className="dash-user-email">{user?.email}</p>
        </div>
        <hr className="dash-divider" />

        <div className="dash-content-card">
            <h3>Workspace Status</h3>
            <p>Your secure cloud session is currently active. Ready to manage your projects?</p>
            <span className="dash-status-badge">● Active Session</span>
        </div>
        
        <button className="dash-logout-btn" onClick={handleLogout}>🚪 Logout from Realm</button>

      </div>
    </div>
  )
}

export default Dashboard