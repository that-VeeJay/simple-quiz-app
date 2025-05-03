export default function Answers({ answers, question, hide }) {
    console.log(answers);
    return (
        <>
            <div className="bg-white p-10 rounded-lg shadow-lg w-[600px]">
                {question.map((q, index) => (
                    <div className="mb-5 space-y-1" key={index}>
                        <p className="text-xl">{q.question}</p>
                        <p><span className="font-semibold">Correct answer:</span> {q.answer}</p>
                        <p className={`p-1 rounded-lg px-3 w-fit ${q.answer === answers[index] ? "bg-green-300" : "bg-red-300"}`}>Your answer: {answers[index]}</p>
                    </div>
                ))}
            </div>
            <button onClick={hide}>Done</button>
        </>
    );
}
