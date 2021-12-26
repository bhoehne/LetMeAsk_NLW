import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider} from './contexts/AuthContext'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

require('dotenv').config();

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;