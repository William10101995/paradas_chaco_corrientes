export const customStyles = {
  control: (base) => ({
    ...base,
    background: "transparent",
    border: "none",
    boxShadow: "none",
    textAlign: "right",
    width: "320px",
    fontFamily: "Inter",
    fontSize: "18px",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    const color = "#0b0d17";
    return {
      ...styles,
      textAlign: "center",
      fontFamily: "Inter",
      borderRadius: "10px",
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#969BAB"
        : isFocused
        ? color
        : undefined,
      color: isDisabled
        ? "white"
        : isSelected
        ? color
          ? "white"
          : "black"
        : "white",
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#969BAB"
            : color
          : undefined,
      },
    };
  },
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#0b0d17",
    padding: 10,
    fontSize: "18px",
  }),
  menu: (provided, state) => ({
    ...provided,
    width: "320px",
    background: "#969BAB",
    borderRadius: "10px",
  }),
  container: (provided) => ({
    ...provided,
    width: "320px",
    textAlign: "right",
  }),
};
