import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import EmbeddedGoogleMap from "./EmbeddedGoogleMap";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <h5>
            <i>The Blood Bank Management System</i> is a comprehensive software
            solution designed to streamline and enhance the operations of blood
            banks. This system efficiently manages the entire process of blood
            donation, collection, testing, storage, and distribution. It
            includes features such as donor registration, blood type tracking,
            inventory management, donor eligibility screening, and real-time
            monitoring of blood units. With user-friendly interfaces for both
            staff and donors, the system ensures accurate record-keeping, quick
            retrieval of information, and seamless communication between
            different departments. This digital solution ultimately promotes the
            effective coordination of blood bank activities, ensuring a reliable
            and timely supply of safe blood for patients in need.
          </h5>
          <EmbeddedGoogleMap />
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
