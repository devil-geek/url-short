import styled from "@emotion/styled"

export const StyledStatics = styled.section`
  background: hsl(218, 31%, 95%);

  h2 {
    font-size: 4rem;
    padding: 12rem 0 1.5rem;
    text-align: center;
    color: hsl(260, 8%, 14%);
  }
  h4 {
    font-size: 2rem;
    color: hsl(257, 7%, 63%);
    font-weight: 400;
    max-width: 58rem;
    margin: 0 auto;
    text-align: center;
  }
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10rem 0 14rem;
  align-items: center;
  div:nth-of-type(1) {
    margin-top: -5rem;
  }
  div:nth-of-type(3) {
    margin-top: 5rem;
  }
  div:nth-of-type(5) {
    margin-top: 15rem;
  }
`

export const StyledCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  max-width: 31%;
  padding: 8rem 4rem 3rem;
  color: hsl(257, 7%, 63%);
  position: relative;
  height: 31rem;
`

export const CardTitle = styled.h5`
  font-size: 2.4rem;
  margin: 1.5rem 0;
  color: hsl(260, 8%, 14%);
`

export const CardIcon = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  background: hsl(255, 11%, 22%);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Line = styled.div`
  background: hsl(180, 66%, 49%);
  width: 4%;
  height: 0.9rem;
`
