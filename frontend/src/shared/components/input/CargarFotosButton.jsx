import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const CargarFotosButton = ({
  id,
  multiple = true,
  handleChange,
  required = false,
  style = {
    width: 120,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 20,
    cursor: "pointer",
  }
}) => {
  return (
    <>
      <input
        id={id}
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={handleChange}
        style={{ visibility: "hidden", position: "absolute" }}
      />
      <label
        htmlFor={id}
        style={style}
      >
        <FileUploadOutlinedIcon />
        {required && <span style={{ color: "red" }}>*</span>}
      </label>
    </>
  );
};

export default CargarFotosButton;
