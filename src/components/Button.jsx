import { Link } from "react-router-dom";

export default function Button({ children, href }) {
    return (
        <Link to={href} className="bg-zinc-800 text-white p-3 rounded-lg hover:shadow-xl hover:bg-zinc-900 transition duration-200">{children}</Link>
    );
}
