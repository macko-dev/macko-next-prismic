import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  lock: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    overflow: ${(props): string => (props.lock === true ? 'hidden' : 'auto')};
    background-color:  ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.white};
  }

html, .root {
  font-size: 16px;
  line-height: 24px;
}
body, .article {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
}

h1, .h1 {
  font-size: 4.25rem;
  line-height: 4.5rem;
  margin-top: 0rem;
  margin-bottom: 3rem;
}
h2, .h2 {
  font-size: 2.625rem;
  line-height: 3rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h3, .h3 {
  font-size: 1.625rem;
  line-height: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h4, .h4 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
h5, .h5 {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0rem;
}
p, ul, ol, pre, table, blockquote {
  margin-top: 0rem;
  margin-bottom: 1.5rem;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}
a, b, i, strong, em, small, code {
  line-height: 0;
}
sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

label{
  color: ${(props) => props.theme.color.primary[4]};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
}

.cursor-pointer{
  cursor: pointer;
}

.border-radius-15{
  border-radius: 15px;
}

.vertical-line{ 
  border: 1px solid #AAA6B8;
  max-width: 150px;
  margin-bottom: 56px;
}

  button {
    cursor: pointer;
    border: 0;

  }

  svg {
    cursor: pointer
  }

  ul {
    list-style:none;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration:none;
  }

  ::-moz-selection { background: ${(props) => props.theme.color.primary[0]}; }
  ::selection { background: ${(props) => props.theme.color.primary[0]}; }

  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity:1
    }
  }

`;
