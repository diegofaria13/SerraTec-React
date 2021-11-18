const Botao = (props) => {
  const showMessage = () => {
    alert('clicou');
  }

  return (
    <button
      style={{
        backgroundColor: "red",
        color: "white",
        width: "250px",
        height: "80px",
      }}
      onClick={showMessage}
    >
      {props.children}
    </button>
  );
};

export default Botao;
