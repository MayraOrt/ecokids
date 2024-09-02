

function DashboardPage(){
    return(
    <div className="main-container flex flex-col items-center">
        <h1 className="w-full text-center pt-10">Lasst uns lernen</h1>
        <div className="max-w-6xl grid grid-cols-3 gap-20 pt-14">
            <div className="min-h-20 border-2 border-amber-800 rounded-xl p-3">
                <p>Was bedeutet Nachhaltigkeit?</p>
            </div>
            <div className="min-h-20 border-2 border-pink-400 rounded-xl p-3">
                <p>Strom sparen leicht gemacht</p>
            </div>
            <div className="min-h-20 border-2 border-sky-300 rounded-xl p-3">
                <p>Das Abenteuer der Mülltrennung</p>
            </div>
        </div>
    </div>
    )
}

export default DashboardPage