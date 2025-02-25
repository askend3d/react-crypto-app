import { Card, Layout, List, Statistic, Typography, Tag } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { capitalize } from "../../utils";
import { useCrypto} from "../../context/cryptoContext";

const siderStyle = {
    padding: "1rem",
};

export default function AppSider() {
    const { assets } = useCrypto();

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map((asset) => (
                <Card key={asset.id} style={{ marginBottom: "1rem" }}>
                    <Statistic
                        title={capitalize(asset.id)}
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
                                withTag: true,
                            },
                            {
                                title: "Asset Amount",
                                value: asset.amount,
                                isPlain: true,
                            },
                            // {
                            //     title: "Difference",
                            //     value: asset.growPercent,
                            // },
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                {item.withTag && (
                                    <Tag color={asset.grow ? "green" : "red"}>
                                        {asset.growPercent}%
                                    </Tag>
                                )}
                                <span type={asset.grow ? "success" : "danger"}>
                                    {item.isPlain && item.value}
                                </span>
                                {!item.isPlain && (
                                    <Typography.Text
                                        type={asset.grow ? "success" : "danger"}
                                    >
                                        {item.value.toFixed(2)}$
                                    </Typography.Text>
                                )}
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    );
}
