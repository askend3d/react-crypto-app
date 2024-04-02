import AppHeader from "./AppHeader"
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import { Layout, Spin } from "antd";
import {  useCrypto } from "../../context/cryptoContext";

function AppLayout() {
    const { loading  } = useCrypto()
    if (loading) {
        return <Spin fullscreen />;
    }
    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
            <AppFooter />
        </Layout>
    );
}

export default AppLayout;
