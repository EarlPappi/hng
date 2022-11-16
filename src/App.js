import Navbar from "./Components/Navbar/Navbar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./App.css";
import Sidebar from "./Components/Navbar/Sidebar";

function App() {
  return (
    <div className="w-full h-screen ">
      {/* navbar here */}
      <div className="navbar">
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar />
        {/* side bar stops */}

        {/* main body starts here */}
        <div className="flex flex-col gap-3 body_main px-[1em] w-[85%] md:w-[80%] mt-10  mx-auto">
          {/* current nav on top */}
          <div className=" flex ">
            <div className=" text-slate-500 font-semibold">Dashboard</div>
            <NavigateNextIcon />
            <div className=" text-black-600 font-semibold ">Imported Data</div>
          </div>
          {/* current nav on top */}
          <h1 className="text-[#12B76A] text-[2em] font-bold">
            Uploaded Account Statement Ready!
          </h1>

          <div className="hero-div flex flex-col gap-2 text-[0.8em] md:text-sm bg-[#EFF8FF] p-7 ">
            <h2>Recent Customers</h2>

            <div className="flex w-full justify-between hero-filter  text-blue-600">
              <div className="flter">Name</div>
              <div className="flter ">Description</div>
              <div className="flter ">Type</div>
              <div className="flter ">Value</div>
              <div className="flter ">Date</div>
              <div className="flter ">Actions</div>
            </div>
            <div className="flex justify-between order-details text-">
              <div className="order-name">James Kirk</div>
              <div className="order-name">Ordered 12 Mac Book</div>
              <div className="order-name">Debit</div>
              <div className="order-name">$12,000</div>
              <div className="order-name">3/22/22</div>
              <div className="flex ">
                <div className="order-action">View more</div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="upload h-400 w-400 mx-auto "></div>
          <button className="bg-[#1849A9] text-white text-sm mx-auto py-2 px-2">
            Sync to Databae
          </button>

          {/* modal here */}
          <div className="underlay flex justify-center align-center bg-[#D0D5DD] mt-20 md:mx-[20%] md:w-[60%]">
            <div className="overlay sm:w-[70%] md:w-[60%] mx-auto my-20 ">
              <h1>Uploading Sales Record</h1>
              <div>progress</div>
            </div>
          </div>
          {/* modal ends here */}
        </div>

        {/* body ends here */}

        {/* ////////////////////// */}
      </div>
      {/* hero section ends  */}
    </div>
  );
}

export default App;
