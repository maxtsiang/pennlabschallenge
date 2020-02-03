export const addCourse = course => {
  return {
    type: "ADD_COURSE",
    course
  };
};

export const removeCourse = course => {
  return {
    type: "REMOVE_COURSE",
    course
  };
};
