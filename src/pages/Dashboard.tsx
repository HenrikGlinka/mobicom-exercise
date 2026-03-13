import { useLoaderData } from "react-router";
import BurgerButton from "../components/BurgerButton";
import EnergyUsage from "../components/EnergyUsage";
import SwitchInput from "../components/SwitchInput";
import UIBlock from "../components/UIBlock";
import UIBlockContainer from "../components/UIBlockContainer";
import UICheckbox from "../components/UICheckbox";
import UIRadio from "../components/UIRadio";
import UISwitchList from "../components/UISwitchList";
import type dashboardLoader from "../loaders/dashboardLoader";

export default function Dashboard() {

    const { devices, statistics } = useLoaderData() as Awaited<ReturnType<typeof dashboardLoader>>;

    return (
        <>
            <header className="grid grid-cols-[1fr_3fr_1fr] content-center items-center px-default py-10">
                <BurgerButton />
                <h1 className="m-0!">Smart Home</h1>
            </header>

            <main>
                <section className="full-bleed">
                    <UIBlockContainer title="Energi Forbrug" open={true} locked={true}>
                        <EnergyUsage today={statistics[1]} yesterday={statistics[0]} />
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

                <section className="grid grid-cols-2 gap-default">
                    <h2 className="col-span-2">Smart indstillinger</h2>
                    <UIBlock>
                        <h3>Lys i Stuen</h3>
                        <UISwitchList>
                            <li>Alt Lys <SwitchInput /></li>
                            <li>Loftlampe <SwitchInput /></li>
                            <li>Bordlampe 1 <SwitchInput /></li>
                            <li>Bordlampe 2 <SwitchInput /></li>
                        </UISwitchList>
                    </UIBlock>

                    <UIBlock>
                        <h3>Varme i Stuen</h3>
                        <UISwitchList>
                            <li>Fan Coil <SwitchInput /></li>
                        </UISwitchList>


                    </UIBlock>

                    <UIBlock>
                        <h3>Lys i Køkken</h3>
                        <UISwitchList>
                            <li>Alt Lys <SwitchInput /></li>
                            <li>Loftlampe <SwitchInput /></li>
                            <li>Bordlampe 1 <SwitchInput /></li>
                            <li>Bordlampe 2 <SwitchInput /></li>
                        </UISwitchList>
                    </UIBlock>

                    <UIBlock>
                        <h3>Varme i Soveværelse</h3>
                        <UISwitchList>
                            <li>Alt Lys <SwitchInput /></li>
                            <li>Loftlampe <SwitchInput /></li>
                            <li>Bordlampe 1 <SwitchInput /></li>
                            <li>Bordlampe 2 <SwitchInput /></li>
                        </UISwitchList>
                    </UIBlock>
                </section>
            </main>
        </>
    )
}