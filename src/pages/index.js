import React from "react"
import { Global, css } from "@emotion/react"
import Footer from "../components/Footer/Footer"
import Main from "../containers/Main/Main"

const IndexPage = () => {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
          *,
          *::after,
          *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }

          html {
            /* this defines 1rem is */
            font-size: 62.5%;
          }

          body {
            box-sizing: border-box;
            overflow-x: hidden;
            font-size: 1.8rem;
            font-family: "Poppins", sans-serif;
          }
        `}
      />
      <Main />
      <Footer />
    </>
  )
}

export default IndexPage
