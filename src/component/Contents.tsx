import { Layout } from "antd";


const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return <Content style={{ minHeight: "100vh" }}>
    <div style={{ paddingLeft: "16px",paddingTop:'10px' }}>
    {children}
    </div>
    </Content>;
};

export default Contents;
