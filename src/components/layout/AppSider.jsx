import { Card, Layout, List, Spin, Statistic, Typography } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { fakeFetchCrypto, fetchCryptoAssets } from "../../api";
import { percentDifference } from "../../utils";

const siderStyle = {
    padding: "1rem",
};

export default function AppSider() {
    const [loading, setLoading] = useState(false);
    const [crypto, setCrypto] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        async function preload() {
            setLoading(true);
            const { result } = await fakeFetchCrypto();
            const assets = await fetchCryptoAssets();
            setAssets(
                assets.map((asset) => {
                    const coin = result.find((c) => c.id === asset.id);
                    return {
                        grow: asset.price < coin.price,
                        growPercent: percentDifference(asset.price, coin.price),
                        totalAmount: asset.amount * coin.price,
                        totalProfit:
                            asset.amount * coin.price -
                            asset.amount * asset.price,
                        ...asset,
                    };
                })
            );
            setCrypto(result);
            setLoading(false);
        }
        preload();
    }, []);

    if (loading) {
        return <Spin fullscreen />;
    }
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map((asset) => (
                <Card key={asset.id} style={{ marginBottom: "1rem" }}>
                    <Statistic
                        title={asset.id}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{
                            color: asset.grow ? "#3f8600" : "crimson",
                        }}
                        prefix={
                            asset.grow ? (
                                <ArrowUpOutlined />
                            ) : (
                                <ArrowDownOutlined />
                            )
                        }
                        suffix="$"
                    />
                    <List
                        size="small"
                        dataSource={[
                            {
                                title: "Total Profit",
                                value: asset.totalProfit,
                            },
                            {
                                title: "Asset Amount",
                                value: asset.amount,
                            },
                            {
                                title: "Difference",
                                value: asset.growPercent,
                            }
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>{item.value}</span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    );
}
