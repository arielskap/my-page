import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = ({children, title}) => {
  return (
    <div className=''>
      <Head>
        <title>{ `${title} | Ariel Villarreal | React Front-End Developer` }</title>
        <meta charSet='UTF-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <meta name="description" content="Ariel Santiago Villarreal Gutierrez Front-End Developer Reactjs Nextjs TailwindCSS" />
        <link rel="shortcut icon" href="/assets/static/chip.svg" />
      </Head>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout
