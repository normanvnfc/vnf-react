import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Why from './Pages/why';

function App() {
  return (
      <div>
      <Switch>
      <Route path="/" component={Why} exact />
      </Switch>
  </div>
  );
}

export default App;
