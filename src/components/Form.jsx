import { useState } from "react";
import NoQuestions from "../pages/NoQuestions";
import Result from "./Result";
import { mathQuestionBank } from "../data/mathQuestionBank";
import { historyQuestionBank } from "../data/historyQuestionBank";
import { scienceQuestionBank } from "../data/scienceQuestionBank";
import { geographyQuestionBank } from "../data/geographyQuestionBank";
import { literatureQuestionBank } from "../data/literatureQuestionBank";
import { technologyQuestionBank } from "../data/technologyQuestionBank";
import { sportsQuestionBank } from "../data/sportsQuestionBank";

export default function Form({ category }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // Set of questions
    const questionBanks = {
        science: scienceQuestionBank,
        history: historyQuestionBank,
        geography: geographyQuestionBank,
        math: mathQuestionBank,
        literature: literatureQuestionBank,
        technology: technologyQuestionBank,
        sports: sportsQuestionBank,
    };

    const questionSet = questionBanks[category];

    // Handle bottom button navigation
    const previousButton = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const nextButton = () => {
        if (currentQuestion !== questionSet.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setIsQuizFinished(true);
        }
    };

    // Handle answer submission
    const initialValues = [null, null, null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialValues);

    const handleChoiceSelection = (choice) => {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = choice;
        setUserAnswers(newUserAnswers);
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setIsQuizFinished(false);
        setUserAnswers(initialValues);
    };

    if (isQuizFinished) {
        return <Result questionSet={questionSet} userAnswers={userAnswers} category={category} restart={restartQuiz} />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            {(!questionSet) ? (
                <NoQuestions />
            ) : (
                <div className="bg-white w-[500px] p-10 rounded-lg shadow-lg space-y-3">
                    <h1 className="text-3xl font-semibold">Question {currentQuestion + 1}</h1>
                    <p className="text-xl">{questionSet[currentQuestion].question}</p>
                    <div className="flex flex-col space-y-3">
                        {questionSet[currentQuestion].choices.map((choice) => (
                            <button onClick={() => handleChoiceSelection(choice)} key={choice} className={`bg-gray-200 hover:bg-gray-300 transition duration-200 p-3 text-left rounded ${userAnswers[currentQuestion] === choice ? "bg-zinc-700 text-white hover:bg-zinc-700" : ""}`}>{choice}</button>
                        ))}
                    </div>
                    <div className="flex justify-between text-white">
                        <button onClick={previousButton} disabled={currentQuestion === 0} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition duration-200 disabled:bg-gray-400">Previous</button>
                        <button onClick={nextButton} className="bg-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition duration-200 disabled:bg-gray-400">{currentQuestion === questionSet.length - 1 ? "Submit Answers" : "Next"}</button>
                    </div>
                </div>
            )}
        </div>
    );
}
