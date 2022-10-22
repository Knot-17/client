import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios';


import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';

import Highlighter from 'react-highlight-words';


const DealersManagement = () => {
  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              backgroundColor: '#1E90FF',
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
    const [dealers,setDealers] = useState([]);


  useEffect(() =>{
    console.log('useEffect');
    axios.get("http://localhost:5000/api/v1/getDealer")
        .then((res) => {
          setDealers(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            });},[]);


const columns = [
{
    title: 'First Name',
    dataIndex: 'firstname',
    key: 'firstname',
    render: (text) => <a>{text}</a>,
    ...getColumnSearchProps('firstname')
},
{
    title: 'Last Name',
    dataIndex: 'lastname',
    key: 'lastname',
    render: (text) => <a>{text}</a>,
    ...getColumnSearchProps('lastname')

    },
{
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    ...getColumnSearchProps('email')

},
{
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ...getColumnSearchProps('address')

},
{
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    ...getColumnSearchProps('city')

},
{
  title: 'Services',
  dataIndex: 'services',
  key: 'services',
  ...getColumnSearchProps('services')

},
{
  title: 'Districts',
  dataIndex: 'districts',
  key: 'districts',
  ...getColumnSearchProps('districts')

},
{
    title: 'Edit',
    key: 'edit',
    render: (_, record) => (
        <Space size="middle">
        <button className='bg-blue-700 text-center rounded-md p-2 text-sm text-white text w-20'>Edit</button>
        </Space>
    ),
},
{
    title: 'Delete',
    key: 'Delete',
    render: (_, record) => (
        <Space size="middle">
        <button className='bg-red-700 text-center rounded-md p-2 text-sm text-white w-20'>Delete</button>
        </Space>
    ),
    },
    
];
return (    
  <div className='mr-4 mt-4'>
  <Table columns={columns} dataSource={dealers} />
  </div>       
  )
}

export default DealersManagement