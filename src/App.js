import "./App.css";
import Topbar from "../src/Topbar";
import SideBar from "./SideBar";
import Mainbody from "./Mainbody";
import 'flowbite';

function App() {
  return (
    <div className="bg-blue-50">
      <div className="grid grid-cols-1">
        <Topbar />
      </div>
      <div className="grid md:grid-cols-5 grid-cols-1">
        <div className="">
          <SideBar />
        </div>
        <div className="col-span-4">
          <Mainbody />
        </div>
      </div>
    </div>
  );
}

export default App;
