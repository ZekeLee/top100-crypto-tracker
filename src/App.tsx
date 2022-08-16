import Router from './Router';
import GlobalStyle from './GlobalStyle';
import { HelmetProvider } from 'react-helmet-async';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

const Toggle = styled.button.attrs({ type: 'button' })`
  all: unset;
  position: relative;
  width: 4rem;
  height: 2rem;
  background-color: ${(props) => props.theme.boxColor};
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 50px;
  span {
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    content: '';
    width: 1.4rem;
    height: 1.4rem;
    background: ${(props) => props.theme.accentColor};
    border-radius: 50%;
    transition: left 0.3s ease;
  }
  &.on span {
    left: 2.3rem;
  }
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Toggle className={isDark ? 'on' : ''} onClick={toggleMode}>
          <span></span>
        </Toggle>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
