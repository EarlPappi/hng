import { Route, Routes } from "react-router-dom";
import Modal from "./Components/Modal";
import { ContextProvider } from "./Context";
import Home from "./Pages/Home";
import Place from "./Pages/Place";
import Connect from "./Pages/Connect";
import MainLayout from "./Components/MainLayout";

function App() {
  return (
    <ContextProvider>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/places-to-stay" element={<Place />} />
        </Route>

        {/* Route without Header and Footer */}
        <Route path="/restore/connect/apps/:appName" element={<Connect />} />
      </Routes>
      <Modal />
    </ContextProvider>
  );
}

export default App;
