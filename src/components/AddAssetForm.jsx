import { Select, Space, Typography, Flex, Divider, Form, InputNumber, Checkbox, Button } from "antd";
import { useState } from "react";
import { useCrypto } from "../context/cryptoContext";

function AddAssetForm() {
  const [coin, setCoin] = useState(null);
  const { crypto } = useCrypto();
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };


  if (!coin) {
    return (
      <Select
        style={{ width: "100%" }}
        onSelect={(v) => setCoin(crypto.find((c) => c.id === v))}
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
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      style={{ maxWidth: 600 }}
      initialValues={{  }}
      onFinish={onFinish}
    >
      <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: 32, marginRight: 8 }}
        />
        <Typography.Title style={{ margin: 0 }} level={2}>
          {coin.name}
        </Typography.Title>
      </Flex>
      <Divider />
      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, 
          type:'number',
          min: 0,
          message: 'Please input your username!' }]}
      >
        <InputNumber style={{width: '100%'}} />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
      >
        <InputNumber disabled style={{width: '100%'}} />
      </Form.Item>
      <Form.Item
        label="Date & Time"
        name="date"
      >
        <InputNumber disabled style={{width: '100%'}} />
      </Form.Item>
      <Form.Item
        label="Total"
        name="total"
      >
        <InputNumber disabled style={{width: '100%'}} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddAssetForm;
