import React, { useState, useEffect } from "react";
import ShowErrors from "./../layout/showErrors";
import { ToastMessage } from "./../layout/tost";
import { Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import NotAccess from "./../layout/notAccess";
import PreRequis from "./preRequis";
import PutDescription from "./putDescription";
import Details from "./details";
import { useLocation, useParams, Link } from "react-router-dom";

const Description = ({ course_ }) => {
  const searchParams = useLocation();
  const courseLink = new URLSearchParams(searchParams.search).get("course");

  return (
    <>
      <div className='timeline timeline-3'>
        <div className='timeline-items'>
          {course_ && courseLink ? (
            <>
              <div className='timeline-item'>
                <div className='timeline-media'>
                  <i
                    className={`flaticon2-${
                      course_ && course_.pre_requis && courseLink
                        ? "correct text-success"
                        : "cancel text-danger"
                    }  fl font-size-h1`}
                  />
                </div>
                <div className='timeline-content'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div className='mr-2'>
                      <span className='text-dark-75 font-size-h5 text-hover-primary font-weight-bold'>
                        Pré requis de la formation
                      </span>
                    </div>
                    <div
                      className='dropdown ml-2'
                      data-toggle='tooltip'
                      title='Quick actions'
                      data-placement='left'
                    ></div>
                  </div>
                  <p className='p-0'>
                    Vous devez prensentez les pre requis une personne qui
                    voudrais suivre cette farmation
                  </p>

                  <PreRequis course_={course_} />
                </div>
              </div>
              <div className='timeline-item'>
                <div className='timeline-media'>
                  <i
                    className={`flaticon2-${
                      course_ && course_.detaille && courseLink
                        ? "correct text-success"
                        : "cancel text-danger"
                    }  fl font-size-h1`}
                  />
                </div>
                <div className='timeline-content'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div className='mr-2'>
                      <span className='text-dark-75 font-size-h5 text-hover-primary font-weight-bold'>
                        Detail de la formation
                      </span>
                    </div>
                    <div
                      className='dropdown ml-2'
                      data-toggle='tooltip'
                      title='Quick actions'
                      data-placement='left'
                    ></div>
                  </div>
                  <p className='p-0'>
                    Vous devez prensentez les pre requis une personne qui
                    voudrais suivre cette farmation
                  </p>

                  <Details course_={course_} />
                </div>
              </div>

              <div className='timeline-item'>
                <div className='timeline-media'>
                  <i
                    className={`flaticon2-${
                      course_ && course_.description && courseLink
                        ? "correct text-success"
                        : "cancel text-danger"
                    }  fl font-size-h1`}
                  />
                </div>
                <div className='timeline-content'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <div className='mr-2'>
                      <span className='text-dark-75 font-size-h5 text-hover-primary font-weight-bold'>
                        Description de la formation
                      </span>
                    </div>
                    <div
                      className='dropdown ml-2'
                      data-toggle='tooltip'
                      title='Quick actions'
                      data-placement='left'
                    ></div>
                  </div>
                  <p className='p-0'>
                    Vous devez prensentez les pre requis une personne qui
                    voudrais suivre cette farmation
                  </p>
                  <PutDescription course_={course_} />
                </div>
              </div>

              <div className='modal-footer'>
                <Link to={`/dashboard/course/${course_.id_}`}>
                  <Button type='default'>
                    <b>Continuer...</b>
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <p className='alert alert-danger'>
              Vous de vevez entrer les informations de base
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Description;
