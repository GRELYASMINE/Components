import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="App">
      <Header />

      <div style={{display :"flex", justifyContent:"center"}}>
        {/*posts & side menu container */}
        <div style={{ display: "flex" ,width:"60%"}}>
          {/* posts container*/}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* ----posts container----close*/}

          {/*side menu container */}
          <div style={{width:"30%"}}>
            <SideMenu />
          </div>
          {/*side menu container */}
        </div>
        {/*====posts & side menu container===== */}
      </div>
    </div>
  );
}

export default App;
