import {useContext} from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home,List,Login,New,Single} from "./pages"
import { productInputs, userInputs } from "./data/formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              <Route path=":productId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
