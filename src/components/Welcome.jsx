const WelcomeMsg = ({ todos }) => {
  return todos.length === 0 && <p className="welcome">Enjoy Your Day!!!</p>;
};

export default WelcomeMsg;
