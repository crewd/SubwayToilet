import styled from 'styled-components';

const SearchBox = (props) => {
  console.log(props)
  return (
    <Select>
      {props.options.map((option, i) => (
        <option key={'region' + i} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  )
}

const Select = styled.select`
  width: 150px;
  padding: 10px;
  border-color: #B7B7B7;
  &:focus{
    outline: none;
  }
`

export default SearchBox;