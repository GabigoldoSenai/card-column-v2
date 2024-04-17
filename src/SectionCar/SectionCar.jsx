import Button from '../Button/Button'

const SectionCar = ({titulo, texto, image, color}) => {
    return (
        <article style={{backgroundColor: color}}>
            <img src={image} alt=""/>
            <h1>{titulo}</h1>
            <p>{texto}</p>
            <Button title="Learn more"/>
        </article>
    )
}

export default SectionCar