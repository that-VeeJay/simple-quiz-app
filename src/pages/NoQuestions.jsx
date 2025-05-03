import Button from "../components/Button";

export default function NoQuestions() {
    return (
        <>
            <div className="space-y-10 text-center">
                <p className="text-2xl font-medium">THERE ARE NO QUESTIONS YET IN THIS CATEGORY</p>
                <Button href="/">Go back home</Button>
            </div>
        </ >
    );
}
