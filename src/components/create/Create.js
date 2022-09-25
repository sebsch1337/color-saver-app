import "./Create.css";

const Create = ({ selectedColor, setSelectedColor, onSubmitHandler }) => {
  return (
    <section className="create__section">
      <form
        name="createForm"
        className="create__box"
        style={{ backgroundColor: selectedColor }}
      >
        <input
          className="create__input"
          name="colorPicker"
          type="color"
          onChange={(event) => setSelectedColor(event.target.value)}
          value={selectedColor}
        />
        <input
          className="create__input create__input--colortext"
          name="colorText"
          type="text"
          onChange={(event) => setSelectedColor(event.target.value)}
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
    </section>
  );
};

export default Create;