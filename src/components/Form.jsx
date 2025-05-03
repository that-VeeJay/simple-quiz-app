import { useState } from "react";
import { mathQuestionBank } from "../data/mathQuestionBank";

export default function Form() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const previousButton = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const nextButton = () => {
        if (currentQuestion !== mathQuestionBank.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white w-[500px] p-10 rounded-lg shadow-lg space-y-3">
                <h1 className="text-3xl font-semibold">Question {currentQuestion + 1}</h1>
                <p className="text-xl">{mathQuestionBank[currentQuestion].question}</p>
                <div className="flex flex-col space-y-3">
                    {mathQuestionBank[currentQuestion].choices.map((choice) => (
                        <button className="bg-gray-200 hover:bg-gray-300 transition duration-200 p-3 text-left rounded">{choice}</button>
                    ))}
                </div>
                <div className="flex justify-between text-white">
                    <button onClick={previousButton} disabled={currentQuestion === 0} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition duration-200 disabled:bg-gray-400">Previous</button>
                    <button onClick={nextButton} disabled={currentQuestion === mathQuestionBank.length - 1} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition duration-200 disabled:bg-gray-400">Next</button>
                </div>
            </div>
        </div>
    );
}
