import React, { useEffect, useState } from "react";
import axios from "axios";

export function GetAUser(id) {
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/getaUser/${id}`)
      .then((res) => {
        setUser(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return user;
}

export function GetUserFilter(id) {
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/filter/${id}`)
      .then((res) => {
        setFilter(res.data[0]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return filter;
}
