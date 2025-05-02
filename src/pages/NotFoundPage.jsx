import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="space-y-2">
                <p className="text-gray-500 font-semibold">Error code: 404</p>
                <p className="text-6xl font-bold">OOOPS!!</p>
                <p className="text-xl mb-7">This is not the page you are looking for.</p>
                <Link className="bg-zinc-800 text-white p-3 rounded-lg" to={"/"}>Go back home</Link>
            </div>
        </div>
    );
}
