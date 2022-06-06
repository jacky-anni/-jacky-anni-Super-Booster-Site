import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import LoadingCharging from "./../layout/loadingCharging";
import moment from "moment";
import "moment/locale/fr";
import { Link } from "react-router-dom";

const ShowBasicInformation = ({ course_, profile_ }) => {
  return (
    <>
      {course_ ? (
        <div className='col-md-12'>
          <table className='table'>
            <tbody>
              <tr>
                <th scope='row'>
                  <i class='fab fa-buffer'></i> Categorie :
                </th>
                <td>{course_.Categorie.nom}</td>
              </tr>

              <tr>
                <th scope='row'>
                  <i class='fa fa-globe'></i> Langue :
                </th>
                <td>{course_.langue}</td>
              </tr>

              <tr>
                <th scope='row'>
                  <i class='fa fa-eye'></i> Visiblité :
                </th>
                <td>{course_.visiblite}</td>
              </tr>

              <tr>
                <th scope='row'>
                  <i class='fa fa-file'></i> Note de passage :
                </th>
                <td>{course_.note_passage}</td>
              </tr>

              <tr>
                <th scope='row'>
                  <i class='fa fa-chevron-circle-right'></i> Modalité :
                </th>
                <td>{course_.type}</td>
              </tr>

              {course_ && course_.type == "Payante" ? (
                <tr>
                  <th scope='row'>
                    <i class='fa fa-money-bill-alt'></i> Prix :
                  </th>
                  <td>{course_.prix}</td>
                </tr>
              ) : null}

              <tr>
                <th scope='row'>
                  <i class='fa fa-chevron-circle-right'></i> Dureé :
                </th>
                <td>{course_.duree}</td>
              </tr>
              {course_ && course_.duree == "Périodique" ? (
                <>
                  <tr>
                    <th scope='row'>
                      <i class='fa fa-calendar'></i> Date de début :
                    </th>
                    <td>
                      {moment(course_.date_debut_cours).format("Do MMMM YYYY")}
                    </td>
                  </tr>

                  <tr>
                    <th scope='row'>
                      <i class='fa fa-calendar'></i> Date de fin :
                    </th>

                    <td>
                      {moment(course_.date_fin_cours).format("Do MMMM YYYY")}
                    </td>
                    {/* {moment(course_.createdAt).fromNow()} */}
                  </tr>
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      ) : (
        <LoadingCharging />
      )}
    </>
  );
};

export default ShowBasicInformation;
