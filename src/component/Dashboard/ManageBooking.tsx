import React from 'react';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  hotel_name: string;
  email: string;
  address: string;
  contact_no:string;
  booking_date:string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Hotel Name',
    dataIndex: 'hotel_name',
    key: 'hotel_name',
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
    title: 'Contact No',
    dataIndex: 'contact_no',
    key: 'contact_no',
  },
  {
    title: 'Booking Date',
    dataIndex: 'booking_date',
    key: 'booking_date',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button className='bg-green-600 text-white font-bold' type='primary'>Confirm Booking</Button>
        <Button type='primary' className='bg-yellow-40 font-bold'>Reschedule</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    hotel_name: 'John Brown',
    email: 'm.sumon@outlook.com',
    address: 'New York No. 1 Lake Park',
    contact_no:'000000',
    booking_date:'232232'
  },
  {
    key: '2',
    hotel_name: 'John Brown',
    email: 'm.sumon@outlook.com',
    address: 'New York No. 1 Lake Park',
    contact_no:'000000',
    booking_date:'232232'
  },
  {
    key: '3',
    hotel_name: 'John Brown',
    email: 'm.sumon@outlook.com',
    address: 'New York No. 1 Lake Park',
    contact_no:'000000',
    booking_date:'232232'
  },
];

const ManageBooking: React.FC = () => <Table columns={columns} dataSource={data} />;

export default ManageBooking;