import Operations from "./Operations.jsx";

// eslint-disable-next-line react/prop-types
function Actions({ setOperator }) {
  return (
    <>
      <Operations setOperator={setOperator} />
    </>
  );
}

export default Actions;
