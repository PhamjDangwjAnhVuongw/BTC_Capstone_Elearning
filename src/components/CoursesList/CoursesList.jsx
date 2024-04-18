import React, { useEffect, useMemo } from "react";
import { https } from "../../services/api";
import Course from "../Course/Course";
import { useDispatch, useSelector } from "react-redux";
import { setCourseList } from "../../redux/courseSlice/courseSlice";
import { NavLink } from "react-router-dom";

export default function CoursesList() {
  const { courseList } = useSelector((state) => state.courseSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    https
      .get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09")
      .then((res) => {
        console.log("res", res.data);
        dispatch(setCourseList(res.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const renderCoursesList = useMemo(() => {
    return courseList.slice(0, 12).map((course, index) => (
      <div className="coursesList__item" key={index}>
        <NavLink to={`/detail/${course.maKhoaHoc}`}>
          <Course course={course} />
        </NavLink>
      </div>
    ));
  }, [courseList]);

  return (
    <div className="homePage__courses container py-20" id="courseList">
      <div className="courses__title text-center pb-10">
        <h2
          className="text-4xl sm:text-2xl capitalize font-medium mb-3"
          style={{ color: "rgba(29, 123, 133, 0.8)" }}
        >
          Danh mục
        </h2>
        <h1
          className="text-5xl sm:text-4xl capitalize font-bold"
          style={{ color: "#1d7a85" }}
        >
          Khám phá khoá học
        </h1>
      </div>
      <div className="courses__list grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    gap-7">
        {renderCoursesList}
      </div>
    </div>
  );
}
