const Contact = ({ name, number, handleDelBtnClick }) => (
  <li>
    <span>
      {name}: {number}
    </span>
    <button type='button' onClick={handleDelBtnClick}>
      Delete
    </button>
  </li>
);

export default Contact;
