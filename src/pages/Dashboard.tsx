import EnergyUsage from "../components/EnergyUsage";

export default function Dashboard() {

    return (
        <>
            <header>
                <h1>Smart Home</h1>
            </header>

            <main>
                <section>
                    <h2>Energi Forbrug</h2>
                    <EnergyUsage />
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