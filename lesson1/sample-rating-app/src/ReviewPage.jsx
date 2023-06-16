import styles from "./ReviewPage.module.css";

// eslint-disable-next-line react/prop-types
function ReviewPage({ gotoNewPage, rate, setRate }) {
  const submitHandler = (event) => {
    event.preventDefault();

    const { currentTarget } = event;
    const form = new FormData(currentTarget);

    setRate(form.get("rate"));
    gotoNewPage(2);
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <h1>How did we do?</h1>
        <p>Please let us know</p>
        <menu>
          <li>
            <input
              className={styles.radio}
              type="radio"
              name="rate"
              value={1}
              defaultChecked={1 === rate}
              id="rate-1"
            />
            <label className={styles.rate} htmlFor="rate-1">
              1
            </label>
          </li>
          <li>
            <input
              className={styles.radio}
              type="radio"
              name="rate"
              value={2}
              defaultChecked={2 === rate}
              id="rate-2"
            />
            <label className={styles.rate} htmlFor="rate-2">
              2
            </label>
          </li>
          <li>
            <input
              className={styles.radio}
              type="radio"
              name="rate"
              value={3}
              defaultChecked={3 === rate}
              id="rate-3"
            />
            <label className={styles.rate} htmlFor="rate-3">
              3
            </label>
          </li>
          <li>
            <input
              className={styles.radio}
              type="radio"
              name="rate"
              value={4}
              defaultChecked={4 === rate}
              id="rate-4"
            />
            <label className={styles.rate} htmlFor="rate-4">
              4
            </label>
          </li>
          <li>
            <input
              className={styles.radio}
              type="radio"
              name="rate"
              value={5}
              defaultChecked={5 === rate}
              id="rate-5"
            />
            <label className={styles.rate} htmlFor="rate-5">
              5
            </label>
          </li>
        </menu>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewPage;
