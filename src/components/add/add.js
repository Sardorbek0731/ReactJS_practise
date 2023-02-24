import "./add.css";

const Add = () => {
  return (
    <div className="add">
      <h3>Yangi kino qo'shish</h3>

      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Necha marotaba ko'rilgan?"
        />
        <button type="button" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default Add;
