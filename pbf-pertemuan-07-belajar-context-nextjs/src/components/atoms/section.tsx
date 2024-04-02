import { levelContext } from "@/utilities/context/mycontext";

export default function Section({ level, children}: { level: number, children: any}) {
    return (
        <section className ="section" >
            <levelContext.Provider value={level}>
                {children}
            </levelContext.Provider>
        </section>
    );
}

