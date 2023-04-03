import React from 'react'



export default function Dashboard() {
    const logout=()=>{
        localStorage.removeItem("login")
        window.location.reload()
      }
    const deleteAccount=()=>{
        localStorage.clear()
        window.location.reload()
      }
  return (
    <div>
        <div className="w-100 h-100">
      <h1>Dashboard</h1>
      </div>
      <button onClick={logout} className="logout" >LogOut</button>
      <button onClick={deleteAccount} className="delete" >Delete</button>
    </div>
  )
}
