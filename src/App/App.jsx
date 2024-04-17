import SectionCar from "../SectionCar/SectionCar"
import iconSedan from "../../public/images/icon-sedans.svg"
import iconLuxury from "../../public/images/icon-luxury.svg"
import iconSuvs from "../../public/images/icon-suvs.svg"

const App = () => {
    return (
    <main className="main">
        <SectionCar
            titulo="Sedans"
            texto="Choose a sedan for its afforbadibility and excellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={iconSedan}
            color="var(--Bright-orange)"
        />
        <SectionCar
            titulo="Suvs"
            texto="Choose a Suvs for its afforbadibility and excellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={iconSuvs}
            color="var(--Dark-cyan)"
        />
        <SectionCar
            titulo="Luxury"
            texto="Choose a Luxury for its afforbadibility and excellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={iconLuxury}
            color="var(--Very-dark-cyan)"
        />
        
    </main>
    )
}

export default App