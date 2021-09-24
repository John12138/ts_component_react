import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <Menu mode='vertical' defaultIndex={0} onSelect={(index) => {alert(index)}}>
          <MenuItem >cool link 1</MenuItem>
          <MenuItem  disabled >cool link 2</MenuItem>
          <MenuItem >cool link 3</MenuItem>
          <li>xx</li>
        </Menu>
        <Button onClick={e=> {e.preventDefault(); alert('xx')}}>xxxx</Button>
        <Button disabled>xxxx</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Baidu Link</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
