import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Quiz() {
    const { category } = useParams();

    return (
        <>
            <Form category={category} />
        </>
    );
}
