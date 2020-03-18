import React from "react"
import Hero from "../components/hero"
import Card from "../components/card"
import project from "../utils/css/project.scss"


function template() {
    return(
        <div>
            <Hero />
            <container>
                <section className="row divid-3">
                    <div className="col-3">
                    <Card />
                    </div>
                    
                    <div className="col-3">
                    <Card />
                    </div>
                    
                    <div className="col-3">
                    <Card />
                    </div>
                </section>

                <section className="row divid-2">
                    <div className="col-6">
                    <Card />
                    </div>
                    
                    <div className="col-6">
                    <Card />
                    </div>
                </section>
            </container>
    </div>
    )
}

export default template