import "./Create.css";

const Create = ({
  selectedColor,
  onChangeSelectedColor,
  onSubmitHandler,
  colorPaletteId,
}) => {
  return (
    <li className="create__box">
      <form
        name="createForm"
        className="create__form"
        style={{ backgroundColor: selectedColor }}
      >
        <input
          className="create__input"
          name="colorPicker"
          type="color"
          onChange={onChangeSelectedColor}
          value={selectedColor}
        />
        <input
          className="create__input create__input--colortext"
          name="colorText"
          type="text"
          onFocus={(event) => event.target.select()}
          onChange={onChangeSelectedColor}
          value={selectedColor}
        />
        <button
          className="create__input create__input--colortext"
          name="addButton"
          type="submit"
          onClick={onSubmitHandler}
        >
          ADD
        </button>
      </form>
    </li>
  );
};

export default Create;
