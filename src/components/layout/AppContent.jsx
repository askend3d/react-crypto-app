import { Layout } from "antd";

const contentStyle = {
  padding: "1rem",
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
};

function AppContent() {
  return (
    <Layout.Content style={contentStyle}>Content</Layout.Content>

    )
}

export default AppContent