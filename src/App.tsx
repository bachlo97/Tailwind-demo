import {UserProfile} from "./One/userProfile"
import JobList from "./Two/JobList"

function App() {

  return (
    <div className="w-full h-screen bg-[#E6EFFA] flex items-center  justify-center">

      {/* Two */}
      <JobList/>
      
      {/* One */} 
      {/* <UserProfile/> */}
    </div>
  )
}

export default App
