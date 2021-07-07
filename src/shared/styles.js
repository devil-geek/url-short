import styled from "@emotion/styled"

export const Container = styled.div`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
`

export const Button = styled.button`
  outline: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  padding: 1.2rem 2.4rem;
  border-radius: 5rem;
  background: hsl(180, 66%, 49%);
  border: 1px solid hsl(180, 66%, 39%);
  cursor: pointer;
  text-rendering: optimizeLegibility;
`

export const LargeButton = styled(Button)`
  padding: 1.8rem 4rem;
  font-size: 2.3rem;
  margin: 4rem 0;
`
