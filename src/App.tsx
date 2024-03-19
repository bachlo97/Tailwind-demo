import { UserProfile } from "./One/userProfile";
import { Collections } from "./Three/collections";
import JobList from "./Two/JobList";

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* Three */}
      <Collections/>
      
      {/* Two */}
      {/* <JobList /> */}

      {/* One */}
      {/* <UserProfile/> */}
    </div>
  );
}

export default App;
