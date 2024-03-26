import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';
import AppFooter from './components/layout/AppFooter';

function App() {
    return (
        <Layout>
          <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
          <AppFooter/>
        </Layout>
    );
}

export default App;
