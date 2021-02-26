const BASE_URL = `http://txcourseapi.jsplusplus.com/`;

const API = {
  getCourseDatas: BASE_URL + 'course/v2/get_course_datas',
  getCourses: BASE_URL + 'course/v2/get_courses',
  geetCourseFields: BASE_URL + 'course/v2/get_course_fields'
};

export {
  API
};