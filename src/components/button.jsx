export default function Button(props) {
  const classNameString = `button ${props.class}`;
  const handleClick = props.handleClick;
  return (
    <button className={classNameString} onClick={handleClick}>
      {props.buttonContent}
    </button>
  );
}
