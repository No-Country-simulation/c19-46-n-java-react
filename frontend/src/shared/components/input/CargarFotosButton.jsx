import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const CargarFotosButton = ({ handleChange, required = false }) => {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        style={{ display: "none" }}
        id="cargar-fotos"
        required={required}
      />
      <label
        htmlFor="cargar-fotos"
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
      </label>
    </>
  );
};

export default CargarFotosButton;
