const Modal = ({ children, onClose }) => {


    
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-[400px] relative">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-500 hover:text-black"
          >
            ✕
          </button>
  
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  

  