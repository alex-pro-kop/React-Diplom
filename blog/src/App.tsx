import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeModeProvider } from './Context/ThemeModeProvider';
import { Theme } from './Context/themeModeContext';
import Router from './Pages/Router/Router';
import store from './Redux/store';
import './firebase';
import classNames from 'classnames';
import './App.css';

function App() {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  const isThemeLight = theme === Theme.Light;

  return (
    <Provider store={store}>
      <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
        <div className={classNames({ 
            ["light"]: isThemeLight,
            ["dark"]: !isThemeLight,})}>
          <Router />
        </div>
      </ThemeModeProvider>
    </Provider>
  );
}

export default App;

