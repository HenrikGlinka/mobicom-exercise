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
import HeatStatus from "../components/HeatStatus";
import type { Device } from "../utilities/smartHome";
import UIButton from "../components/UIButton";
import Navigation from "../components/Navigation";

export default function Dashboard() {

    const { devices, statistics } = useLoaderData() as Awaited<ReturnType<typeof dashboardLoader>>;

    const deviceList = Object.fromEntries(Object.entries(devices).map(
        ([, device]) => [(device as Device).name.toLowerCase(), device] as [string, Device]
    ));

    console.log(deviceList);


    return (
        <>
            <header className="grid grid-cols-[1fr_3fr_1fr] content-center items-center px-default pt-10 pb-5">
                <BurgerButton />
                <h1 className="m-0!">Smart Home</h1>
            </header>

            <main className="flex flex-col overflow-hidden">
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
                    <UIBlockContainer title="Forudindstillet" open={true} locked={true} justify="stretch">
                        <UIRadio label="Hjemme" group="presets" checked={true} icon="home-off" iconChecked="home-on" />
                        <UIRadio label="Ude" group="presets" icon="away-off" iconChecked="away-on" />
                        <UIRadio label="Sover" group="presets" icon="sleep-off" iconChecked="sleep-on" />
                    </UIBlockContainer>
                </section>

                <section className="flex flex-col overflow-hidden full-bleed px-default">
                    <h2>Smart indstillinger</h2>
                    <div className="overflow-hidden overflow-y-scroll">
                        <div className="grid grid-cols-2 auto-rows-fr gap-default shrink-0 pb-default">
                            <UIBlock>
                                <h3>Lys i Stuen</h3>
                                <UISwitchList>
                                    <li>Alt Lys <SwitchInput /></li>
                                    <li>Loftlampe <SwitchInput /></li>
                                    <li>Bordlampe 1 <SwitchInput /></li>
                                    <li>Bordlampe 2 <SwitchInput /></li>
                                </UISwitchList>
                            </UIBlock>

                            <UIBlock className="flex flex-col justify-between">
                                <h3 className="mb-0!">Varme i Stuen</h3>
                                <UISwitchList>
                                    <li>Fan Coil <SwitchInput checked={Number(deviceList.stue?.vent_level) > 0} /></li>
                                </UISwitchList>
                                <HeatStatus temperature={Number(deviceList.stue?.current_temp)} mode={deviceList.stue?.work_mode} />
                                <UIButton to="/heating" icon="temp-settings" label="Indstillinger" />
                            </UIBlock>

                            <UIBlock className="flex flex-col justify-between">
                                <h3 className="mb-0!">Lys i Køkken</h3>
                                <UISwitchList>
                                    <li>Køkkenbord <SwitchInput /></li>
                                    <li>Loftlampe <SwitchInput /></li>
                                </UISwitchList>
                                <h3 className="mb-0!">Varme i Køkken</h3>
                                <UISwitchList>
                                    <li>Fan Coil <SwitchInput /></li>
                                </UISwitchList>
                            </UIBlock>

                            <UIBlock className="flex flex-col justify-between">
                                <h3 className="mb-0!">Varme i Soveværelse</h3>
                                <UISwitchList>
                                    <li>Fan Coil <SwitchInput /></li>
                                </UISwitchList>
                                <HeatStatus temperature={17} mode='manual' />
                                <UIButton icon="temp-settings" label="Indstillinger" />
                            </UIBlock>

                            <UIBlock className="flex flex-col justify-between">
                                <h3 className="mb-0!">Lys i Indkørsel</h3>
                                <UISwitchList>
                                    <li>Væglamper <SwitchInput /></li>
                                    <li>Bedlamper <SwitchInput /></li>
                                </UISwitchList>
                                <h3 className="mb-0!">Lys i Garage</h3>
                                <UISwitchList>
                                    <li>Alt lys <SwitchInput /></li>
                                </UISwitchList>
                            </UIBlock>

                            <UIBlock className="flex flex-col justify-between">
                                <h3 className="mb-0!">Varme i Badeværelse</h3>
                                <UISwitchList>
                                    <li>Gulvvarme <SwitchInput /></li>
                                </UISwitchList>
                                <HeatStatus temperature={21} mode='timed' />
                                <UIButton icon="temp-settings" label="Indstillinger" />
                            </UIBlock>
                        </div>
                    </div>

                </section>
            </main>
            <Navigation />
        </>
    )
}