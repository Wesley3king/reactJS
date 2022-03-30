import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/*const  rootElement  =  document . getElementById ( "root" ) ;

const  root  =  ReactDOMClient . createRoot ( rootElement ) ; 
raiz . render ( < App  callback = { ( )  =>  console .log ( "rendered " ) } / > ) ; */ 
