import { StepsProvider } from "./context/StepsContext";
import Home from "./pages/Home";

function App() {
  return (
    <StepsProvider>
      <Home />
    </StepsProvider>
  );
}

export default App;
