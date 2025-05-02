export default function Category({ img, category, color }) {
    return (
        <div className={`w-[200px] h-[200px] rounded-lg hover:shadow-xl relative hover:transform hover:scale-105 duration-200 ${color}`} >
            <div className="w-[90%] absolute top-0 left-0 transform -translate-y-8 -translate-x-6">
                <img src={img} alt={`${category} logo`} />
            </div>
            <p className="absolute left-3 text-white bottom-3 font-semibold text-xl">{category}</p>
        </div>
    );
}
