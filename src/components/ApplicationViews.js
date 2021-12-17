import React from "react"
import { Route } from "react-router-dom"
import {MyHauls} from './haul/MyHauls'
import {HaulForm} from './haul/HaulForm'
import { Home } from "./home/Home"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
                {/* <Route exact path="/feed">
                    <HaulFeed />
                </Route>*/}
                <Route exact path ="/">
                    <Home />
                </Route>
                <Route exact path="/new">
                    <HaulForm />
                </Route>
                <Route exact path="/myhauls">
                    <MyHauls />
                </Route>
                <Route path="/myhauls/:haulId">
                    <HaulForm />
                </Route>
        </main>
    </>
}