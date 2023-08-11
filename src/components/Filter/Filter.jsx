import { nanoid } from 'nanoid';

const filterId = nanoid();

const Filter = ({ handleFilterChange, filter }) => {
  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        id={filterId}
        type='text'
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

export default Filter;
