import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import Answers from "./Answers";
import { useState } from "react";

export default function Result({ questionSet, userAnswers, category, restart }) {

    const [showAnswers, setShowAnswers] = useState(false);

    const categoryImage = categories.find(cat => cat.name.toUpperCase() === category.toUpperCase());

    const getScore = () => {
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questionSet[index].answer) {
                finalScore++;
            }
        });
        return finalScore;
    };

    const score = getScore();

    const hideAnswers = () => {
        setShowAnswers(false);
    };


    return (
        <div className="min-h-screen flex flex-col space-y-10 items-center justify-center bg-gray-200">

            {showAnswers ? (
                <Answers answers={userAnswers} question={questionSet} hide={hideAnswers} />
            ) : (
                <div>
                    <div className="bg-white p-10 rounded-lg shadow-lg relative overflow-hidden w-[600px]">
                        <img className="absolute w-3/4 -top-10 -left-10 -translate-y-8 transform -rotate-10 opacity-20 pointer-events-none" src={categoryImage.img} alt="category image" />
                        <div className="space-y-3">
                            <h1 className="text-2xl font-semibold">Congratulations on completing the quiz!</h1>
                            <p className="text-lg"><span className="font-semibold">Category:</span> {category.toUpperCase()}</p>
                            <p className="text-lg"><span className="font-semibold">Score:</span> {score}/{questionSet.length}</p>

                            <div className="flex justify-between items-center">
                                <Link to="/" className="text-blue-600 hover:underline">Back to categories</Link>
                                <button onClick={restart} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition duration-200 disabled:bg-gray-400 text-white">Restart Quiz!</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <button onClick={() => setShowAnswers(!showAnswers)}>Review answers</button>
                    </div>
                </div>
            )}
        </div>
    );
}
