import "./Create.css";

const Create = () => {
  return (
    <section className="create__section">
      <form className="create__box">
        <input
          className="create__input"
          name="colorPicker"
          type="color"
        ></input>
        <input
          className="create__input create__input--colortext"
          name="colorText"
          type="text"
        ></input>
        <button
          className="create__input create__input--colortext"
          name="addButton"
          type="submit"
        >
          ADD
        </button>
      </form>
    </section>
  );
};

export default Create;
