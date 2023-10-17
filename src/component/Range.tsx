import React, { useState } from "react";
import { Card, Input, Slider } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

interface IconSliderProps {
  max: number;
  min: number;
}

const Range: React.FC<IconSliderProps> = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);

  Number(((max - min) / 2).toFixed(5));

  return (
    <div className="mb-0 mt-3">
      <Card title="Your budget per night" bordered={false}>
        <Slider className="" {...props} onChange={setValue} value={value} />
        <div className="flex justify-start mb-0">
          <p className="mt-0 text-sm">BDT {min}</p>
          <p className="mt-0 ml-3 text-sm"> - BDT {value}</p>
        </div>
      </Card>
      <Input
      className="text-gray-500 mt-2"
        size="large"
        placeholder="Search places"
        prefix={<GlobalOutlined />}
      />
    </div>
  );
};

export default Range;
