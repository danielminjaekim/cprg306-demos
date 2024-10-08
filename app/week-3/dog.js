export default function Dog({ name, breed, age, color }) {
    return (
        <section className="m-2 bg-neutral-100">
            <h3 className="text-xl font-bold text-white-900">{name}</h3>
            <p>
                <span className="font-bold">Breed: </span>
                {breed}
            </p>
            <p>Age: {age}</p>
            <p>Color: {color}</p>
        </section>
    );
}