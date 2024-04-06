import { Divider, Flex, Tag, Typography } from "antd";
function CoinInfoModal({ coin }) {
    return (
        <>
            <Flex align="center">
                <img
                    src={coin.icon}
                    alt={coin.name}
                    style={{ width: 32, marginRight: 8 }}
                />
                <Typography.Title level={2} style={{ margin: 0 }}>
                    ({coin.symbol}){coin.name}
                </Typography.Title>
            </Flex>
            <Divider />
            <Typography.Paragraph>
                <Typography.Text strong>1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
                    {coin.priceChange1h}%
                </Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
                    {coin.priceChange1d}%
                </Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
                    {coin.priceChange1w}%
                </Tag>
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>price: </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>price BTC: </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>
            <Typography.Paragraph>
                <Typography.Text strong>Marcet Cap: </Typography.Text>
                {coin.marketCap}$
            </Typography.Paragraph>
            {coin.contractAddress && (
                <Typography.Paragraph>
                    <Typography.Text strong>Contact Adress: </Typography.Text>
                    {coin.contractAddress}
                </Typography.Paragraph>
            )}
        </>
    );
}

export default CoinInfoModal;
