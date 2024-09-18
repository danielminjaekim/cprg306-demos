import Dog from './dog';

    let dog1 = {
        name: 'Rex',
        breed: 'German Shepherd',
        age: 2,
        color: 'black',
    };

    let dog2 = {
        name: 'Max',
        breed: 'Golden Retriever',
        age: 3,
        color: 'brown',
    };

    let dog3 = {
        name: 'Buddy',
        breed: 'Beagle',
        age: 4,
        color: 'white',
    };

    export default function Page() {
    return (
        <main className="m-4 ">
            <h2 className="text-2xl font-bold ">Meet the Dogs</h2>
            <Dog
                name={dog1.name}
                breed={dog1.breed}
                age={dog1.age}
                color={dog1.color}
            />
            <Dog
                name={dog1.name}
                breed={dog1.breed}
                age={dog1.age}
                color={dog1.color}
            />
            <Dog
                name={dog1.name}
                breed={dog1.breed}
                age={dog1.age}
                color={dog1.color}
            />
        </main>
    );
};