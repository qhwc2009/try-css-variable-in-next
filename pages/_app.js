import App from 'next/app'

class MyApp extends App {
  static async getInitialProps(ctx) {
    // 必须要拿一下Component的getInitialProps 不然的话 组件的getInitialProps就不会生效
    const { Component } = ctx
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
