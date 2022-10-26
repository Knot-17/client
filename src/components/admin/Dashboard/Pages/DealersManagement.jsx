import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

import {
  Form,
  FormContainer,
  InputBox,
  InputContainerDouble,
  Label,
  InputP,
  InputContainerLeft,
  ButtonContainer,
  ButtonElement,
  Select,
  ButtonElementEdit,
} from "../../../clients/Profile/profileElements";

import Highlighter from "react-highlight-words";

const DealersManagement = () => {
  const { register, handleSubmit } = useForm();

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [id, setId] = useState(0);

  const del = (record) => {
    console.log(record);
    axios
      .delete(`http://localhost:5000/api/v1/getDealer/${record.id}`)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "User Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        setUsers(users.filter((user) => user.id !== record.id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const edit = (record) => {
    setId(record.id);
    setFormData(record);
  };

  const update = (data) => {
    console.log({ ...data, id: id });
    axios
      .put(`http://localhost:5000/api/v1/getDealer/${id}`, { ...data, id: id })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "User Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        setUsers([...users.filter((user) => user.id !== id), res.data]);
        setId(0);
      });
  };

  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
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
              backgroundColor: "#1E90FF",
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
          color: filtered ? "#1890ff" : undefined,
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
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/getDealer")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("firstname"),
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("lastname"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      ...getColumnSearchProps("city"),
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
      ...getColumnSearchProps("services"),
    },
    {
      title: "Districts",
      dataIndex: "districts",
      key: "districts",
      ...getColumnSearchProps("districts"),
    },
    {
      title: "Edit",
      key: "edit",
      render: (item, record) => (
        <Space size="middle">
          <button
            className="bg-blue-700 text-center rounded-md p-2 text-sm text-white text w-20"
            onClick={(e) => {
              e.preventDefault();
              edit(item);
            }}
          >
            Edit
          </button>
        </Space>
      ),
    },
    {
      title: "Delete",
      key: "Delete",
      render: (item, record) => (
        <Space size="middle">
          <button
            className="bg-red-700 text-center rounded-md p-2 text-sm text-white w-20"
            onClick={(e) => {
              e.preventDefault();
              del(item);
            }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="mr-4 mt-4">
        <Table columns={columns} dataSource={users} />
      </div>
      {id != 0 ? (
        <div className="mr-4 mt-4">
          <FormContainer>
            {/* {user.map((users) => ( */}
            <Form className="mt-10" onSubmit={handleSubmit(update)}>
              <InputContainerDouble>
                <InputContainerLeft>
                  <Label> First Name </Label>
                  <InputBox>
                    <InputP
                      name="firstname"
                      // onChange={handleChange}
                      defaultValue={formData.firstname}
                      {...register("firstname", { required: true })}
                    />
                  </InputBox>
                </InputContainerLeft>
                <InputContainerLeft>
                  <Label> Last Name </Label>
                  <InputBox>
                    <InputP
                      name="lastname"
                      // onChange={handleChange}
                      defaultValue={formData.lastname}
                      {...register("lastname", { required: true })}
                    />
                  </InputBox>
                </InputContainerLeft>
              </InputContainerDouble>
              <InputContainerDouble>
                <InputContainerLeft>
                  <Label> Email </Label>
                  <InputBox>
                    <InputP
                      name="email"
                      // onChange={handleChange}
                      defaultValue={formData.email}
                      {...register("email", { required: true })}
                    />
                  </InputBox>
                </InputContainerLeft>
                <InputContainerLeft>
                  <Label> Date of Birth</Label>
                  <InputBox>
                    <InputP
                      name="dob"
                      // onChange={handleChange}
                      defaultValue={formData.dob}
                      {...register("dob", { required: true })}
                    />
                  </InputBox>
                </InputContainerLeft>
              </InputContainerDouble>
              <InputContainerDouble>
                <InputContainerLeft>
                  <Label> Gender </Label>
                  <InputBox>
                    <Select
                      name="gender"
                      // onChange={handleChange}
                      value={formData.gender}
                      {...register("gender", { required: true })}
                    >
                      <option value="" disabled hidden>
                        Gender
                      </option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </Select>
                  </InputBox>
                </InputContainerLeft>
                <InputContainerLeft>
                  <Label> Mobile </Label>
                  <InputBox>
                    <InputP
                      name="mobile"
                      // onChange={handleChange}
                      defaultValue={formData.mobile}
                      {...register("mobile", { required: true })}
                    />
                  </InputBox>
                </InputContainerLeft>
              </InputContainerDouble>
              <InputContainerDouble>
                <InputContainerLeft>
                  <Label> Address </Label>
                  <InputBox>
                    <InputP
                      name="address"
                      // onChange={handleChange}
                      defaultValue={formData.address}
                      {...register("address", { required: true })}
                    />
                  </InputBox>
                </InputContainerLeft>
                <InputContainerLeft>
                  <Label> City </Label>
                  <InputBox>
                    <InputP
                      name="city"
                      // onChange={handleChange}
                      defaultValue={formData.city}
                      {...register("city", { required: true })}
                    />
                  </InputBox>
                </InputContainerLeft>
              </InputContainerDouble>
              <InputContainerDouble>
                <ButtonContainer>
                  <ButtonElement type="submit">Save Changes</ButtonElement>
                </ButtonContainer>
                <ButtonContainer>
                  <ButtonElementEdit
                    onClick={(e) => {
                      e.preventDefault();
                      setId(0);
                    }}
                  >
                    Cancel
                  </ButtonElementEdit>
                </ButtonContainer>
              </InputContainerDouble>
            </Form>
            {/* ))} */}
          </FormContainer>
        </div>
      ) : null}
    </>
  );
};

export default DealersManagement;
