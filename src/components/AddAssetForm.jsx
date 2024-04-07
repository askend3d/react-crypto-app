import { Select, Space, Typography } from "antd";
import { useState } from "react";
import { useCrypto } from "../context/cryptoContext";

function AddAssetForm() {
    const [coin, setCoin] = useState(null);
    const { crypto } = useCrypto();
    if (!coin) {
        return (
            <Select
                style={{ width: "100%" }}
                onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
                onClick={() => setSelect((prev) => !prev)}
                placeholder="Select coin"
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
        );
    }
    return (
        <form>
            <Typography.Title style={{ margin: 0 }} level={2}>
                {coin.name}
            </Typography.Title>
        </form>
    );
}

export default AddAssetForm;
