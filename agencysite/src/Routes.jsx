import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import App from './App.jsx'
import Services  from './components/index.js'

function Routes() {
    
    return (
        <div>
            <Switch>
                <Route exact path="App" component={App}></Route>
                <Route exact path="/Design" component={Design}></Route>
            </Switch>
        </div>
    )
}