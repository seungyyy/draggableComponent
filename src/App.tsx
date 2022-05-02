import React from 'react';
import { Draggable } from './components/draggable';
import GlobalStyles from './createGlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Draggable />
    </>
  );
}

export default App;
