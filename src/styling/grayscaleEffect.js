export default `
    &:hover,
    &:focus {
      transition: .75s;
      box-shadow: 0 0 10px ${props => props.theme.primary};
      filter: grayscale(90%);
    }
`
