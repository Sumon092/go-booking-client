import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  email: string;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 4 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button className='bg-green-600 text-white font-bold' type='primary'>Make Admin</Button>
        <Button type='primary' className='bg-red-400 text-white'>Delete</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    email: 'm.sumon@outlook.com',
    address: 'New York No. 1 Lake Park',
    tags: ['user'],
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'm.sumon@outlook.com',
    address: 'London No. 1 Lake Park',
    tags: ['admin'],
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'm.sumon@outlook.com',
    address: 'Sydney No. 1 Lake Park',
    tags: ['user'],
  },
];

const ManageUser: React.FC = () => <Table columns={columns} dataSource={data} />;

export default ManageUser;