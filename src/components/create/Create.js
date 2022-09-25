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
          onChange={(event) => onChangeSelectedColor(event.target.value)}
          value={selectedColor}
        />
        <input
          className="create__input create__input--colortext"
          name="colorText"
          type="text"
          onFocus={(event) => event.target.select()}
          onChange={(event) => onChangeSelectedColor(event.target.value)}
          value={selectedColor}
        />
        <button
          className="create__input create__input--colortext"
          name="addButton"
          type="submit"
          onClick={(event) =>
            onSubmitHandler(event, colorPaletteId, selectedColor)
          }
        >
          ADD
        </button>
      </form>
    </li>
  );
};

export default Create;
