import PropTypes from "prop-types";
const Button = ({ link, text }) => {
  return (
    <>
      <a className="btn" href={link}>
        {text}
      </a>
    </>
  );
};
Button.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
};
Button.defaultProps = {
  link: "Link",
  text: "Link",
};

export default Button;
