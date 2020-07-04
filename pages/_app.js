import PropTypes from 'prop-types'
import '../public/assets/styles/global.css'

const MyApp = ({ Component, pageProps }) => {
  if (process.browser) {
    document.documentElement.lang = 'en';
  }
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp;
