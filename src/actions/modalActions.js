export const openModal = (classValue) => {
  return {
    type: "OPEN_MODAL",
    payload: {
      isOpen: true,
      classData: classValue,
    },
  };
};

export const closeModal = (classValue) => {
  return {
    type: "CLOSE_MODAL",
    payload: {
      isOpen: false,
    },
  };
};
