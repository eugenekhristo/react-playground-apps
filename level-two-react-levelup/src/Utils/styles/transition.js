export default ({ time = '.3s', ease = 'ease', property = 'all' }) =>
  `transition: ${property} ${time} ${ease};`;
