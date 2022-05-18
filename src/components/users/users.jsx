import React, { useState, useEffect, useRef } from "react";
import { Table } from "antd";
import { Avatar, Image } from "antd";
import { Skeleton } from "antd";
import { Spin } from "antd";
// import DeleteUser from "./deleteUser";
import UserItemList from "./userItemList";
import { connect } from "react-redux";
import { getUsers } from "./../../actions/userActions";
import PropTypes from "prop-types";
import SearchUsers from "./searchUsers";

const Users = ({
  user: { users, loading, filtered },
  getUsers,
  searchUsers
}) => {
  const [users_, setUsers_] = useState(users);

  useEffect(async () => {
    try {
      getUsers();
      if (filtered !== null) {
        setUsers_({ filtered });
      }
    } catch (error) {}
  }, []);

  const columns = [
    {
      render: users_ => (
        <>
          {filtered !== null ? (
            <UserItemList user={users_} />
          ) : (
            <UserItemList user={users_} />
          )}
        </>
      )
    }
  ];

  return (
    <>
      <SearchUsers />
      {loading == true ? (
        <span style={{ padding: 50 }}>
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton active avatar paragraph={{ rows: 1 }} />

          {/* <Spin size="large" /> */}
        </span>
      ) : (
        <Table
          columns={columns}
          loading={false}
          dataSource={filtered !== null ? filtered : users}
          rowKey='id'
        />
      )}

      {/* {
        <Skeleton />
      } */}
    </>
  );
};

Users.propTypes = { user: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
