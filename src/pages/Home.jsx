import Category from "../components/Category";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="m-5">
                <div className="text-center mb-25 space-y-1">
                    <h1 className="text-5xl  font-semibold">Get Ready to Test Your <span className="bg-zinc-800 text-white p-1">knowledge!</span></h1>
                    <p className="text-xl">Choose your category:</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {categories.map(({ img, name, color }) => (
                        <Link to="/quiz"><Category key={name} img={img} category={name} color={color} /></Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
