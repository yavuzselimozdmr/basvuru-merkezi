import { useState, useEffect } from 'react';

export default function Tugva404Sayfasi() {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        // Sayfa yüklendiğinde animasyon başlat
        const timer = setTimeout(() => {
            setAnimationClass('animate-fade-in');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleAnasayfayaDon = () => {
        window.location.href = 'https://basvuru.tugva.org';
    };

    return (
        <div style={{ 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            minHeight: 'calc(100vh - 140px)', // Header ve footer için yer bırak
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #08a4d4 0%, #0892c0 50%, #0680a8 100%)',
            padding: '40px 20px',
            overflow: 'hidden',
            position: 'relative',
            marginTop: '70px' // Header yüksekliği için
        }}>
            {/* Arka plan animasyonlu şekiller */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '150px',
                height: '150px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
            }}></div>
            
            <div style={{
                position: 'absolute',
                top: '60%',
                left: '5%',
                width: '100px',
                height: '100px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite reverse'
            }}></div>

            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '50%',
                animation: 'float 7s ease-in-out infinite'
            }}></div>

            {/* Ana içerik */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '25px',
                padding: '60px 40px',
                textAlign: 'center',
                maxWidth: '600px',
                width: '100%',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                zIndex: 1
            }}>
                {/* 404 Büyük Sayısı */}
                <div style={{
                    fontSize: 'clamp(5rem, 12vw, 8rem)',
                    fontWeight: '900',
                    color: '#08a4d4',
                    marginBottom: '20px',
                    textShadow: '0 4px 8px rgba(8, 164, 212, 0.3)',
                    lineHeight: '1',
                    letterSpacing: '-5px'
                }}>
                    4🔍4
                </div>

                {/* Başlık */}
                <h1 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                }}>
                    Sayfa Bulunamadı!
                </h1>

                {/* Alt başlık */}
                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                    color: '#666',
                    marginBottom: '30px',
                    lineHeight: '1.6'
                }}>
                    Üzgünüz! Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
                </p>



                {/* Ana buton */}
                <button
                    onClick={handleAnasayfayaDon}
                    style={{
                        background: 'linear-gradient(135deg, #08a4d4, #0892c0)',
                        color: 'white',
                        border: 'none',
                        padding: '18px 40px',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(8, 164, 212, 0.3)',
                        marginBottom: '20px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                    onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'translateY(-3px)';
                        target.style.boxShadow = '0 15px 35px rgba(8, 164, 212, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.transform = 'translateY(0)';
                        target.style.boxShadow = '0 8px 25px rgba(8, 164, 212, 0.3)';
                    }}
                >
                    🏠 Anasayfaya Dön
                </button>

                {/* Alt mesaj */}
                <div style={{
                    fontSize: '0.9rem',
                    color: '#999',
                    marginTop: '25px',
                    padding: '20px',
                    background: 'rgba(8, 164, 212, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(8, 164, 212, 0.1)'
                }}>
                    <strong style={{ color: '#08a4d4' }}>TÜGVA</strong> ile geleceğini şekillendir! 
                    <br />
                    Eğitimden spora, sanattan teknolojiye kadar birçok projemiz sizi bekliyor.
                </div>


            </div>

            {/* CSS Animasyonları */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out;
                }

                @media (max-width: 768px) {
                    body {
                        padding: 10px;
                    }
                }
            `}</style>
        </div>
    );
}