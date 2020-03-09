export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV !== 'production') return
  ;(function(f, a, t, h, o, m) {
    a[h] =
      a[h] ||
      function() {
        ;(a[h].q = a[h].q || []).push(arguments)
      }
    ;(o = f.createElement('script')), (m = f.getElementsByTagName('script')[0])
    o.async = 1
    o.src = t
    o.id = 'fathom-script'
    m.parentNode.insertBefore(o, m)
  })(document, window, '//fathom.lucas.computer/tracker.js', 'fathom')
  /*
   ** Set the current page
   */
  fathom('set', 'siteId', 'NKKWY')
  /*
   ** Every time the route changes (fired on initialization too)
   */
  app.router.afterEach((to, from) => {
    /*
     ** We tell Google Analytics to add a `pageview`
     */
    fathom('trackPageview')
  })
}
