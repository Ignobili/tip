function Button(props) {
    function reset() {
        window.location.reload();
    }
  return (
    <button onClick={reset} className="reset">
      RESET
    </button>
  );
}
export default Button;
