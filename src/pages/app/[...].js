import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import DynamicPage from "../../components/Dynamic"
import IndexPage from ".."

const App = () => {
    return (
        <Layout>
            <Router basepath="/app">
                <DynamicPage path="/dynamic" />
                <IndexPage path="/" />
            </Router>
        </Layout>
    )
}

export default App;