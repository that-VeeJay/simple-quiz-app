import Button from "./Button";

export default function Modal({ children, img, category, open, close }) {
    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/90 z-[1000]"></div>
            <div className="space-y-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12 rounded-lg z-[1000] overflow-hidden">
                {img && <img src={img} draggable="false" alt="category" className="w-32 h-32 mx-auto absolute transform scale-200 -rotate-10 opacity-30 pointer-events-none" />}
                <p className="text-xl">{children}</p>
                <div className="flex justify-end gap-5">
                    <button onClick={close} className="hover:text-red-500">Close</button>
                    <Button href={`/form/${category.toLowerCase()}`}>Start</Button>
                </div>
            </div>
        </>
    );
}
