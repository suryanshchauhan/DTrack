import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
    text-transform: none;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--black);
  }
  a {
    color: var(--link);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;
