import { Outlet } from "react-router-dom";
import SideMenuButton from "../ui/SideMenuButton/SideMenuButton";

export default function MainLayout() {
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-row w-full h-full">

                <div className="w-[13%] border-r border-primary p-3 flex flex-col gap-2">

                    <div>
                        <h3 className="text-3xl text-white font-bold">Real-Time Flight Tracking</h3>
                        <p className="text-muted-foreground">Visualize and analyze live air traffic data.</p>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-2">
                        <SideMenuButton text="Arrivals/Departures"></SideMenuButton>
                        <SideMenuButton text="Filters"></SideMenuButton>
                        <SideMenuButton text="Flight Tracks"></SideMenuButton>
                    </div>
                </div>

                <div className="flex-grow">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}