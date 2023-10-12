import { Input, Select, SelectProps, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import "../styles/SearchFilter.css";

const { RangePicker } = DatePicker;

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};

const SearchFilter = () => {
  return (
    <section className="pl-24 pr-24 mt-[-25px]">
      <div className="flex  bg-blue-600 max-h-10 p-[6px] gap-[2px]">
        <div className="w-1/3">
          <Input
            size="large"
            placeholder="Where Are You Going"
            prefix={<UserOutlined />}
            style={{ width: "100%", background: "white" }}
          />
        </div>

        <div
          className="w-1/3 flex border-gray-300 rounded-md justify-center bg-none"
          style={{ border: "1px solid gray", background: "white" }}
        >
          <RangePicker size="large" className="border-0" />
        </div>
        <div className="w-1/3">
          <Space
            direction="vertical"
            className="w-full"
            style={{ width: "100%" }}
          >
            <Select
              mode="multiple"
              size="large"
              placeholder="Please select person and room"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              style={{ width: "100%" }}
              options={options}
            />
          </Space>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
