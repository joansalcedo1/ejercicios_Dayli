import Login_logic from "./features/Login_logic"
import Aurora from "./components/AuroraBG"
import './app.css'
function App() {

  return (
    <>
      <div className="">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="">
          <Login_logic />
        </div>

      </div>
    </>
  )
}

export default App
