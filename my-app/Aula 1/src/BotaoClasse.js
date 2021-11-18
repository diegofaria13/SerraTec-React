import React from 'react';

class BotaoClasse extends React.Component {
  showMessage = () => {
    alert("clicou");
  };

  render() {
    return (
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          width: "250px",
          height: "80px",
        }}
        onClick={this.showMessage}
      >
        {this.props.children}
      </button>
    );
  }
}

export default BotaoClasse;