
////////////////////////////////////////////////////////////////////////
//////////           Main App for Bot Store               /////////////
/////////          Connecting Business to Bots           /////////////
/////////////////////////////////////////////////////////////////////

import React, { Component }   from 'react';
import { Route, Switch }      from 'react-router-dom'
import ListAgents             from './pages/ListAgents';
import CreateAgent            from './pages/CreateAgent';
import ListClients            from './pages/ListClients';
import NoMatch                from './pages/NoMatch';
import Nav                    from "./components/Nav";
import Footer                 from "./components/Footer";
import * as ContactsAPI       from './utils/ContactsAPI'
import About                  from "./components/common/About";
import Contact                from "./components/common/Contact";

class App extends Component {
  state = {
    agents: [ ],
    clients: [ ],
    currentPage: "Agents"
  }

  removeAgentContact = (contact) => {
    ContactsAPI.remove(contact.id).then(cnt =>{
      this.setState( (state) => ({
        agents: state.agents.filter((c) => c.id !== contact.id )
      }) )
    })
  }
  removeClientContact = (contact) => {
    ContactsAPI.removeClient(contact.id).then(cnt =>{
      this.setState( (state) => ({
        clients: state.clients.filter((c) => c.id !== contact.id )
      }) )
    })
  }

  componentDidMount() {
        ContactsAPI.getAll().then((agents) => {
          this.setState({ agents })
        })
        ContactsAPI.getAllClients().then((clients) => {
             this.setState({ clients })
           })
      }

  render() {
    return (
      <div className = 'app'>       
        <Nav />
        <Switch>
          <Route exact path="/" 
            render={(props) => <ListAgents {...props}  onDeleteContact = { this.removeAgentContact }
            contacts={this.state.agents}/> } />
          <Route exact path="/clients" 
            render={(props) => <ListClients {...props}  onDeleteContact = { this.removeClientContact }
            contacts={this.state.clients}/> } />
          <Route exact path="/create" 
            render={(props) => <CreateAgent {...props}  onCreateAgent = { this.createAgent }
            contacts={this.state.agents}/> } />
          <Route component={NoMatch} />
        </Switch>
        <Footer/>

       </div>
    );
  }
}

export default App;
