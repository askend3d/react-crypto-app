import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppSider from "./components/layout/AppSider";
import AppContent from "./components/layout/AppContent";
import AppFooter from "./components/layout/AppFooter";
import {CryptoContextProvider} from "./context/cryptoContext";

function App() {
    return (
        <CryptoContextProvider>
            <Layout>
                <AppHeader />
                <Layout>
                    <AppSider />
                    <AppContent />
                </Layout>
                <AppFooter />
            </Layout>
        </CryptoContextProvider>
    );
}

export default App;
