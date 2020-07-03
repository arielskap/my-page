module.exports = withCss(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer // Only enable PurgeCSS for client-side production builds
  })
)
