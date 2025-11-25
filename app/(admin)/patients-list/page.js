import React from "react";

const patientsList = () => {
  return (
    <div className="inner_content pt-4 ">
      <div className="top-admin-apoint">
        <p>All Appointments</p>
      </div>
      <div className="patient-apo-detail">
        <div className="table-space"></div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col admin-tab" style={{ paddingLeft: 30 }}>
                #
              </th>
              <th scope="col admin-tab">Patient</th>
              <th scope="col admin-tab">Age</th>
              <th scope="col admin-tab">Date &amp; time</th>
              <th scope="col admin-tab bg-danger"> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row tab-in "
                style={{ paddingTop: "30px !important", paddingLeft: 30 }}
              >
                1
              </th>
              <td className="rola">
                <div className="mian-text d-flex align-items-center">
                  <img src="img/profile_img.svg" className="admin-apo-img" />
                  <div className="main-text-in">
                    <p className="apoint-doctor">Dr. Richard James</p>
                  </div>
                </div>
              </td>
              <td className="tab-in">28</td>
              <td className="tab-in">24thJuly2024,</td>
              <td className="tab-in">
                <img src="img/cancel_icon.svg" className="cancle-form" />
              </td>
            </tr>
            <tr>
              <th
                scope="row tab-in"
                style={{ paddingTop: "30px !important", paddingLeft: 30 }}
              >
                2
              </th>
              <td className="rola">
                <div className="mian-text d-flex align-items-center">
                  <img src="img/profile_img.svg" className="admin-apo-img" />
                  <div className="main-text-in">
                    <p className="apoint-doctor">Dr. Richard James</p>
                  </div>
                </div>
              </td>
              <td className="tab-in">28</td>
              <td className="tab-in">24thJuly2024,</td>
              {/* <td class="tab-in"> Dr. Richard James</td> */}
              <td className="tab-in">
                <img src="img/cancel_icon.svg" className="cancle-form" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default patientsList;
