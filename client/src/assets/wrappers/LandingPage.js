import styled from "styled-components";

const Wrapper = styled.main`
  .logo {
    width: var(--fluid);
    max-width: var(--max-width);
    margin: 1% auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh);
    display: grid;
    align-items: center;
    margin-top: -5%;
  }

  h1 {
    font-size: 700;
    span {
      color: var(--gold);
    }
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    .card {
      display: block;
    }
  }
  .feature-cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #eaeaea;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    transition: all 0.2s ease-in-out;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .feature-card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .feature-card h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
  }

  .feature-card p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export default Wrapper;
