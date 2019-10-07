import React from 'react';
import './App.css';
import { CreateItem, Dashboard, ITicket, Login, ModuleAside, NotFound, PageHeader, Ticket } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
    uri: "http://localhost:5556/graphql",
})

// maybe make this a section?
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
`;

const App: React.FC = () => {
    function notFound() {
        return <NotFound />
    }

    function dashboard() {
        return <Dashboard />;
    }

    function login() {
        return <Login />;
    }

    function create({ match }: { match: any }) {
        return <CreateItem {...match.params} />;
    }

    function ticket({ match }: { match: any }) {
        match.params.ticket = parseInt(match.params.ticket);
        const params: ITicket = match.params;
        if (params.ticket) {
            return <Ticket {...params} />;
        }
        return <NotFound />;
    }

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <PageHeader />
                <ContentWrapper>
                    <ModuleAside />
                    <main>
                        <Switch>
                            <Route path="/" exact component={dashboard} />
                            <Route path="/login" component={login} />
                            <Route path="/create/:item" component={create} />
                            <Route path="/ticket/:project-:ticket" component={ticket} />
                            <Route path="/page-not-found" component={notFound} />
                            <Route default component={notFound} />
                        </Switch>
                    </main>
                </ContentWrapper>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
