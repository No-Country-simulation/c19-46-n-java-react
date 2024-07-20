import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const CargarFotosButton = ({
  id,
  multiple = true,
  handleChange,
  required = false,
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
        style={{
          width: 120,
          height: 120,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 20,
          cursor: "pointer",
        }}
      >
        <FileUploadOutlinedIcon />
        {required && <span style={{ color: "red" }}>*</span>}
      </label>
    </>
  );
};

export default CargarFotosButton;
