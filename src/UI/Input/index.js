import classes from './Input.module.css';

const Input = ({
  id, label, value = '', onChange,
}) => (
  <div className={classes['form-group']}>
    <input
      type="text"
      id={id}
      placeholder={label}
      value={value}
      required
      onChange={onChange}
    />
  </div>
);

export default Input;
