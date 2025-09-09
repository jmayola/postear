import TimersSection from "@/features/timers/TimersSection";
import { JSX } from "react";


export default function HomePage(): JSX.Element {
return (
<div className="space-y-10 place-content-around flex">
<TimersSection />
</div>
);
}