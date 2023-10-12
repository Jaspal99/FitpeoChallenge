import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import TemporaryDrawer from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="side-drawer">
        <TemporaryDrawer />
      </div>
      <div className="app-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
