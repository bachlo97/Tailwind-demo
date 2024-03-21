import { UserList } from "./Five/UserList";
import { ReviewForm } from "./Four/ReviewForm";
import { UserProfile } from "./One/userProfile";
import { Subscriptions } from "./Seven/Subscriptions";
import { Notification } from "./Six/Notification";
import { Collections } from "./Three/collections";
import JobList from "./Two/JobList";

function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* Seven */}
      <Subscriptions/>
        
      {/* Six */}
      {/* <Notification/> */}

      {/* Five */}
      {/* <UserList/> */}

      {/* Four */}
      {/* <ReviewForm/> */}

      {/* Three */}
      {/* <Collections/> */}
      
      {/* Two */}
      {/* <JobList /> */}

      {/* One */}
      {/* <UserProfile/> */}
    </div>
  );
}

export default App;
