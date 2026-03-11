import BurgerButton from "../components/BurgerButton";
import EnergyUsage from "../components/EnergyUsage";
import UIBlockContainer from "../components/UIBlockContainer";
import UICheckbox from "../components/UICheckbox";
import UIRadio from "../components/UIRadio";

export default function Dashboard() {

    return (
        <>
            <header className="grid grid-cols-[1fr_3fr_1fr] content-center items-center px-default py-10">
                <BurgerButton />
                <h1 className="m-0!">Smart Home</h1>
            </header>

            <main>
                <section className="full-bleed">
                    <UIBlockContainer title="Energi Forbrug" open={true}  locked={true}>
                        <EnergyUsage />
                    </UIBlockContainer>
                </section>

                <section className="full-bleed">
                    <UIBlockContainer title="Rum" open={true}>
                        <UICheckbox label="Soveværelse" checked={false} icon="bedroom-off" iconChecked="bedroom-on" />
                        <UICheckbox label="Stue" checked={false} icon="livingroom-off" iconChecked="livingroom-on" />
                        <UICheckbox label="Badeværelse" checked={false} icon="bathroom-off" iconChecked="bathroom-on" />
                        <UICheckbox label="Køkken" checked={false} icon="kitchen-off" iconChecked="kitchen-on" />
                    </UIBlockContainer>
                </section>

                <section className="full-bleed">
                    <UIBlockContainer title="Forudindstillet" open={true} locked={true}>
                        <UIRadio label="Hjemme" group="presets" checked={true} icon="home-off" iconChecked="home-on" />
                        <UIRadio label="Ude" group="presets" icon="away-off" iconChecked="away-on" />
                        <UIRadio label="Sover" group="presets" icon="sleep-off" iconChecked="sleep-on" />
                    </UIBlockContainer>
                </section>

                <section>
                    <h2>Smart indstillinger</h2>
                </section>
            </main>
        </>
    )
}