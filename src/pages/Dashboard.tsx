import { useState } from "react"
import { getStatistics } from "../utilities/smartHome";
import { getDateString } from "../utilities/dateString";

export default function Dashboard() {

    const yesterday = getDateString(new Date(), -1);
    const [statistics] = useState(getStatistics(22, yesterday));

    console.log(statistics);
    

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