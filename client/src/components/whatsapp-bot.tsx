import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function WhatsAppBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPageScrolled, setIsPageScrolled] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

    const programs = [
        { id: 'strength', name: '🏋️ Strength & Conditioning', message: 'Hello! I\'m interested in the Strength & Conditioning program at Fit Fab Studio. Can you provide more details about the training plan and pricing?' },
        { id: 'personal', name: '💪 Personal Training', message: 'Hi! I\'d like to know more about your Personal Training programs at Fit Fab Studio. What are the packages and availability?' },
        { id: 'functional', name: '🔄 Functional Training', message: 'Hello! I\'m interested in the Functional Training program. Could you share details about the sessions and cost?' },
        { id: 'crossfit', name: '⚡ CrossFit Programs', message: 'Hi Fit Fab Studio! I want to join your CrossFit program. Please provide information about classes and membership options.' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Show bot only after scrolling down 300px
            setIsPageScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const phoneNumber = "919497306050";

    const handleProgramSelect = (selectedMsg: string) => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(selectedMsg)}`;
        window.open(url, '_blank');
        setSelectedProgram(null);
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isPageScrolled && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-[100]"
                >
                    {/* Floating WhatsApp Button */}
                    <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-[#25D366] hover:bg-[#1ba85c] h-16 w-16 rounded-full shadow-2xl flex items-center justify-center text-white border-4 border-white relative group transition-all"
                    >
                        {isOpen ? (
                            <X size={28} />
                        ) : (
                            <>
                                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.434h.005c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 flex h-5 w-5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
                                </span>
                            </>
                        )}
                    </motion.button>

                    {/* Chat Window - Only show when open */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-24 right-0 w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#25D366]"
                            >
                                {/* Header */}
                                <div className="p-6 bg-[#25D366] flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#25D366] text-xl">
                                            FF
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm leading-tight">Fit Fab Studio</h3>
                                        <p className="text-white/80 text-[11px] font-semibold uppercase tracking-widest mt-1">👋 Select a program</p>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="ml-auto text-white hover:bg-white/20 p-2 rounded-full transition"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* Programs - Program Selection Grid */}
                                <div className="p-6 space-y-3 max-h-[400px] overflow-y-auto">
                                    {programs.map((program) => (
                                        <motion.button
                                            key={program.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleProgramSelect(program.message)}
                                            className="w-full bg-gradient-to-r from-[#25D366] to-[#20ba5c] hover:from-[#20ba5c] hover:to-[#1ba85c] text-white p-4 rounded-xl text-sm font-bold transition-all transform flex items-center gap-3 group"
                                        >
                                            <span className="text-lg">{program.name.split(' ')[0]}</span>
                                            <span className="flex-1 text-left text-xs font-semibold">{program.name.split(' ').slice(1).join(' ')}</span>
                                            <motion.svg
                                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </motion.svg>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Footer Message */}
                                <div className="p-4 bg-[#f0f0f0] border-t border-gray-200">
                                    <p className="text-xs text-gray-600 text-center">
                                        💬 Click any program to message us on WhatsApp
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
