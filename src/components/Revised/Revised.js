const Revised = () => {
    return (
        <div>
            <div className="ml-7 mr-4 mb-[46px] flex items-center justify-between">
                <h4 className="text-xl font-bold text-white">Revised (0)</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                    <rect width="49" height="49" rx="14" fill="#211A75" />
                    <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3" />
                </svg>
            </div>
            <div className="p-5 bg-[#211A75] rounded-[14px] w-[260px] ">
                <div className="w-full bg-[#15132B] h-[67px] rounded-[14px] flex justify-center items-center text-[#7879F1] border-2 border-dashed border-[#7879F1]">
                    Move card here
                </div>
            </div>
        </div>
    );
};

export default Revised;