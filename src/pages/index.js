import React from "react"
import { Global } from "@emotion/react"
import { globalStyles } from "../shared/styles"
import Footer from "../components/Footer/Footer"
import Main from "../containers/Main/Main"

const IndexPage = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Main />
      <Footer />
    </>
  )
}

export default IndexPage
