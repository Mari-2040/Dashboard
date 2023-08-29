import React from "react";

interface PaginProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagin({ currentPage, onPageChange }: PaginProps) {
  const totalPages = 3;

  return (
    <div className="flex justify-center mt-9 gap-8 items-center cursor-pointer">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
         <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector" d="M9.24776 15.6838C9.45856 15.473 9.56396 15.2234 9.56396 14.935C9.56396 14.6466 9.45856 14.3973 9.24776 14.1871L3.07121 8.01054L9.26884 1.81291C9.46559 1.61616 9.56396 1.37022 9.56396 1.0751C9.56396 0.779974 9.45856 0.527009 9.24776 0.316206C9.03696 0.105402 8.78736 0 8.49898 0C8.21061 0 7.96129 0.105402 7.75105 0.316206L0.668048 7.42029C0.583727 7.50461 0.523859 7.59596 0.488444 7.69433C0.453029 7.79271 0.435602 7.89811 0.436165 8.01054C0.436165 8.12297 0.453872 8.22837 0.489286 8.32675C0.524702 8.42512 0.584289 8.51647 0.668048 8.60079L7.77213 15.7049C7.96888 15.9016 8.21145 16 8.49983 16C8.78821 16 9.03752 15.8946 9.24776 15.6838Z" fill="black" fill-opacity="0.5"/>
         </svg> 
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
        <button key={i} className={`${i === currentPage ? "text-white rounded-xl bg-blue-900" : ""} w-10 h-10 rounded-lg`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      ))}
      
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path id="Vector" d="M0.752241 15.6838C0.541437 15.473 0.436035 15.2234 0.436035 14.935C0.436035 14.6466 0.541437 14.3973 0.752241 14.1871L6.92879 8.01054L0.73116 1.81291C0.53441 1.61616 0.436035 1.37022 0.436035 1.0751C0.436035 0.779974 0.541437 0.527009 0.752241 0.316206C0.963044 0.105402 1.21264 0 1.50102 0C1.78939 0 2.03871 0.105402 2.24895 0.316206L9.33195 7.42029C9.41627 7.50461 9.47614 7.59596 9.51156 7.69433C9.54697 7.79271 9.5644 7.89811 9.56384 8.01054C9.56384 8.12297 9.54613 8.22837 9.51071 8.32675C9.4753 8.42512 9.41571 8.51647 9.33195 8.60079L2.22787 15.7049C2.03112 15.9016 1.78855 16 1.50017 16C1.21179 16 0.962482 15.8946 0.752241 15.6838Z" fill="black"/>
        </svg>
      </button>
    </div>
  );
}
