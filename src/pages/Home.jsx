import { useState } from "react";
import Category from "../components/Category";
import { categories } from "../data/categories";
import Modal from "../components/Modal";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const openModal = (name) => {
        setSelectedCategory(name);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedCategory(null);
        setIsOpen(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="m-5">
                <div className="text-center mb-25 space-y-1">
                    <h1 className="text-5xl  font-semibold">Get Ready to Test Your <span className="bg-zinc-800 text-white p-1">KNOWLEDGE!</span></h1>
                    <p className="text-xl">Choose your category:</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {categories.map(({ img, name, color }) => (
                        <button onClick={() => openModal(name)} key={name}><Category key={name} img={img} category={name} color={color} /></button>
                    ))}
                </div>

                <Modal open={isOpen} close={closeModal} category={selectedCategory} img={categories.find(cat => cat.name === selectedCategory)?.img}>
                    <div className="text-center text-3xl font-semibold mb-5">{selectedCategory}</div>
                    <div className="text-lg"> {
                        categories.find(cat => cat.name === selectedCategory)?.description || "No description available."
                    }</div>
                </Modal>
            </div>
        </div>
    );
}
