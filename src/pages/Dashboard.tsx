import { useState } from "react"
import { getAllDevices } from "../utilities/smartHome";

export default function Dashboard() {

    const [devices] = useState(getAllDevices());

    console.log(devices);
    

    return (
        <>
            <header>
                <h1>Smart Home</h1>
            </header>

            <main>
                <section>
                    <h2>Energi Forbrug</h2>
                </section>

                <section>
                    <h2>Rum</h2>
                </section>

                <section>
                    <h2>Forudindstillet</h2>
                </section>

                <section>
                    <h2>Smart indstillinger</h2>
                </section>
            </main>
        </>
    )
}