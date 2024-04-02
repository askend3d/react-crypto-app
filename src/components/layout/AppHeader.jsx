import { Layout, Select, Button, Space } from "antd";
import { useCrypto } from "../../context/cryptoContext";
import { useState } from "react";

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





export default function appHeader() {
    const handleSelect = (value) => {
        console.log(`Selected ${value}`);
    };
    const {select, setSelect} = useState(false);
    const { crypto } = useCrypto();
    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{ width: 250 }}
                open={select}
                onSelect={handleSelect}
                value="press / to open"
                placeholder="select one country"
                optionLabelProp="label"
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
            <Button type="primary">Add Asset</Button>
        </Layout.Header>
    );
}
