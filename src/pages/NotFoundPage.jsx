import Button from "../components/Button";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="space-y-2">
                <p className="text-gray-500 font-semibold">Error code: 404</p>
                <p className="text-6xl font-bold">OOOPS!!</p>
                <p className="text-xl mb-7">This is not the page you are looking for.</p>
                <Button href="/">Go back home</Button>
            </div>
        </div>
    );
}
