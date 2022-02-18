const size = {
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
}
const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}
export default device;