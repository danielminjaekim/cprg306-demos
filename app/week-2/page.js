import Heading from "./heading";

export default function Page() {
    let a = 5;
    let b = 10;

    return (
        <main>
            <Heading />
            <p>These are the demos for week 2.</p>
            <p>The sum of a + b is {a + b}.</p>
            <p>Go back to <Link href="/">the home page</Link></p>
        </main>
    );
}