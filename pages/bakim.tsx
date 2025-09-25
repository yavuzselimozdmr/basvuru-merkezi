import { useState, useEffect } from 'react';

export default function TugvaBakimSayfasi() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => prev >= 100 ? 0 : prev + 1);
        }, 150);

        return () => clearInterval(progressInterval);
    }, []);

    const handleAnasayfayaDon = () => {
        window.location.href = 'https://basvuru.tugva.org';
    };

    return (
        <div style={{ 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            minHeight: 'calc(100vh - 140px)',
            background: 'linear-gradient(135deg, #08a4d4 0%, #0892c0 50%, #0680a8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            marginTop: '70px'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '25px',
                padding: '60px 40px',
                textAlign: 'center',
                maxWidth: '550px',
                width: '100%',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
                {/* Ana başlık */}
                <div style={{
                    fontSize: '4rem',
                    marginBottom: '30px',
                    color: '#08a4d4'
                }}>
                    ⚙️
                </div>

                <h1 style={{
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: '20px'
                }}>
                    Site Bakımda
                </h1>

                <p style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    color: '#666',
                    marginBottom: '40px',
                    lineHeight: '1.6'
                }}>
                    Sistemi iyileştiriyoruz. Kısa süre sonra yeniden hizmetteyiz.
                </p>

                {/* Progress bar */}
                <div style={{
                    background: '#f0f4f8',
                    borderRadius: '25px',
                    padding: '8px',
                    marginBottom: '35px',
                    border: '2px solid #e9ecef'
                }}>
                    <div style={{
                        background: 'linear-gradient(90deg, #08a4d4, #0892c0)',
                        height: '20px',
                        borderRadius: '20px',
                        width: `${progress}%`,
                        transition: 'width 0.15s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{
                            color: 'white',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                        }}>
                            {progress}%
                        </span>
                    </div>
                </div>

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
                        marginBottom: '25px'
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
                    Ana Sayfaya Dön
                </button>

                {/* Alt mesaj */}
                <div style={{
                    fontSize: '0.9rem',
                    color: '#999',
                    padding: '20px',
                    background: 'rgba(8, 164, 212, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(8, 164, 212, 0.1)'
                }}>
                    <strong style={{ color: '#08a4d4' }}>TÜGVA</strong> olarak size daha iyi hizmet verebilmek için çalışıyoruz.
                </div>
            </div>
        </div>
    );
}