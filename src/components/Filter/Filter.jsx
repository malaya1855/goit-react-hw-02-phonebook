import PropTypes from "prop-types";
import { InputFilter } from "components";

export const Filter = ({filter, changeFilter}) => {
    return <label htmlFor="name">
    Find contacts by name
<InputFilter
type="text"
name="name"
value = {filter}
onChange={changeFilter}
/>
</label>
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
  }