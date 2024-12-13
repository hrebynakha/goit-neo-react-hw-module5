import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const search = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;
    onSubmit(query);
    form.reset();
  };
  return (
    <form onSubmit={search} className={css.form}>
      <input type="text" name="query" className={css.input} />
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
