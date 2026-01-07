import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";

export function WhatsAppBot() {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = "919497306050";
    const firstMessage = "Hello! I'm interested in joining Fit Fab Studio. Could you provide details on admissions and training programs?";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(firstMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            {/* Main Bot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-6 w-[320px] bg-[#075E54] rounded-3xl shadow-2xl overflow-hidden border border-white/10"
                    >
                        {/* Header */}
                        <div className="p-6 bg-[#075E54] flex items-center gap-4 border-b border-white/10">
                            <div className="relative">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#075E54] text-xl">
                                    FF
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#075E54]" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold leading-none">Fit Fab Admission Bot</h3>
                                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">Typically replies instantly</p>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="bg-[#E5DDD5] p-6 h-[200px] overflow-y-auto space-y-4">
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                                <p className="text-sm text-gray-800">
                                    Welcome to <strong>Fit Fab Studio</strong>! 💪
                                </p>
                                <p className="text-sm text-gray-800 mt-2">
                                    Are you looking for admission details or personal training enquiries?
                                </p>
                                <p className="text-[10px] text-gray-400 mt-2 text-right">Online</p>
                            </div>
                        </div>

                        {/* Chat Footer */}
                        <div className="p-4 bg-white">
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all transform active:scale-95"
                            >
                                <Send size={18} />
                                Start Chatting
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`${isOpen ? 'bg-black' : 'bg-[#25D366]'} h-16 w-16 rounded-full shadow-2xl flex items-center justify-center text-white border-2 border-white/20 relative group`}
            >
                {isOpen ? <X size={28} /> : (
                    <>
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.434h.005c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                        </span>
                    </>
                )}
            </motion.button>
        </div>
    );
}
