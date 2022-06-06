import { Button, Drawer, Radio, Space } from "antd";
import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToastMessage } from "./../layout/tost";
import { addDescription, clear } from "./../../actions/coursesActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
const queryString = require("query-string");

const Details = ({
  course: { errors, descriptionValidate, course },
  clear,
  addDescription,
  course_
}) => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const [details, setDetails] = useState();
  const [loading_, setLoading_] = useState(false);
  let location = useLocation();
  const history = useHistory();
  const parsed = queryString.parse(location.search);
  const courseLink = parsed.course;

  useEffect(() => {
    if (descriptionValidate) {
      clear();
      setVisible(false);
      setLoading_(false);
    }
  });

  const showDrawer = () => {
    setVisible(true);
  };

  const onSubmit = () => {
    // setLoading_(true);
    if (details) {
      if (courseLink) {
        const data = {
          pre_requis: course_.pre_requis,
          detaille: details,
          description: course_.description
        };
        setLoading_(true);
        addDescription(data, course_.id_);
      } else {
        ToastMessage(
          "Erreur, vous devez ajouter les informatios de base !",
          "error"
        );
        history.push(location.pathname + "?step=1");
        setVisible(false);
        setLoading_(false);
      }
    } else {
      ToastMessage("Vous devez entrer quelques choses !", "error");
      setLoading_(false);
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  const config = {
    toolbar: [
      "bold",
      "italic",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "link"
    ]
  };

  return (
    <>
      <Space>
        <Button type='primary' onClick={showDrawer}>
          <b>
            {course_ && course_.pre_requis && courseLink
              ? "Modifier"
              : "Ajouter"}
          </b>
        </Button>
      </Space>
      <Drawer
        title='Drawer with extra actions'
        placement={placement}
        onClose={onClose}
        height={500}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Anuuler</Button>
            <button
              onClick={onSubmit}
              disabled={loading_}
              className={`btn btn-primary  btn-md  ${
                loading_ ? "spinner spinner-darker-primary  spinner-left" : ""
              }`}
            >
              <b>Ok</b>
            </button>
          </Space>
        }
      >
        <CKEditor
          editor={ClassicEditor}
          data={
            course_ && course_.detaille && courseLink ? course_.detaille : ""
          }
          onChange={(event, editor) => {
            const detaille_ = editor.getData();
            setDetails(detaille_);
          }}
          config={config}
        />
      </Drawer>
    </>
  );
};

Details.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { clear, addDescription }
)(Details);
