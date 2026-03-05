import React from 'react';
import antesImg from '../../assets/antes.png';
import depoisImg from '../../assets/depois.png';

const BeforeAfterGallery = () => {
    return (
        <section id="galeria" className="py-12 px-4 md:px-16 w-full max-w-6xl mx-auto overflow-hidden">
            {/* Header */}
            <div className="mb-12 flex flex-col items-center mx-auto text-center">
                <div className="flex items-center gap-4 mb-4">
                    <span className="w-8 h-[1px] bg-accent" />
                    <span className="font-mono-data text-xs text-accent uppercase tracking-widest font-semibold">
                        A Arte da Transformação
                    </span>
                    <span className="w-8 h-[1px] bg-accent" />
                </div>
                <h2 className="font-serif-drama text-4xl md:text-5xl text-primary mb-6">
                    Mude Seu Sorriso.
                </h2>
                <p className="font-sans-outfit text-primary/70 max-w-xl mx-auto text-sm md:text-base">
                    Compare os resultados impressionantes de uma reabilitação estética avançada.
                </p>
            </div>

            {/* Side by Side Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-8">

                {/* Before Image */}
                <div className="flex flex-col gap-4">
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-dark/20 border border-white/5 group">
                        <img
                            src={antesImg}
                            alt="Sorriso antes do tratamento"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg z-10">
                            <span className="font-mono-data text-xs text-white uppercase tracking-widest font-bold">Antes</span>
                        </div>
                    </div>
                </div>

                {/* After Image */}
                <div className="flex flex-col gap-4">
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-dark/20 border-2 border-accent/20 group">
                        <img
                            src={depoisImg}
                            alt="Sorriso depois do tratamento"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-xl z-10">
                            <span className="font-mono-data text-xs text-white uppercase tracking-widest font-bold">Depois</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BeforeAfterGallery;
