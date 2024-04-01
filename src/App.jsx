import AppLayout from "./components/layout/AppLayout";
import { CryptoContextProvider } from "./context/cryptoContext";

function App() {
    
    return (
        <CryptoContextProvider>
            <AppLayout />
        </CryptoContextProvider>
    );
}

export default App;
