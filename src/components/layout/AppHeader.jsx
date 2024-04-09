import { Layout, Select, Button, Space, Modal, Drawer, DatePicker } from "antd";
import { useCrypto } from "../../context/cryptoContext";
import { useEffect, useState } from "react";
import CoinInfoModal from "../CoinInfoModal";
import AddAssetForm from "../AddAssetForm";

const headerStyle = {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    height: 60,
    padding: "1rem",
    display: "flex",
    backgroundColor: "#4096ff",
    justifyContent: "space-between",
    alignItems: "center",
};

export default function AppHeader() {
    const [select, setSelect] = useState(false);
    const [modal, setModal] = useState(false);
    const [coin, setCoin] = useState(null);
    const [drawer, setDrawer] = useState(true);

    const handleSelect = (value) => {
        setCoin(crypto.find((c) => c.id === value));
        setModal(true);
    };
    const { crypto } = useCrypto();
    useEffect(() => {
        const keypress = (event) => {
            if (event.key === "/") {
                setSelect((prev) => !prev);
            }
        };
        document.addEventListener("keypress", keypress);
        return () => document.removeEventListener("keypress", keypress);
    }, []);
    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{ width: 250 }}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value="press / to open"
                placeholder="select one country"
                options={crypto.map((coin) => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                    <Space>
                        <img
                            style={{ width: 24 }}
                            src={option.data.icon}
                            alt={option.data.label}
                        />{" "}
                        {option.data.label}
                    </Space>
                )}
            />
            <Button onClick={() => setDrawer(true)} type="primary">
                Add Asset
            </Button>

            <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
                <CoinInfoModal coin={coin} />
            </Modal>
            <Drawer
                width={600}
                title="Add Asset "
                onClose={() => setDrawer(false)}
                open={drawer}
                destroyOnClose
            >
                <AddAssetForm />
            </Drawer>
        </Layout.Header>
    );
}
