// eslint-disable-next-line react/prop-types
function OutputPage({ rate, setPage }) {
  return (
    <div>
      <p>You have selected {rate} out of 5</p>
      <button onClick={() => setPage(1)}>Back to review</button>
    </div>
  );
}

export default OutputPage;
