import { useState } from 'react';

// Yurt tipi tanımı
interface Yurt {
    id: number;
    ad: string;
    sehir: string;
    ilce: string;
    kisa_aciklama: string;
    detay_aciklama: string;
    adres: string;
    telefon: string;
    email: string;
    kapasite: number;
    ozellikler: string[];
    resimler: string[];
    aktif: boolean;
    cinsiyet: 'Erkek' | 'Kız';
    slug: string;
    renk: string;
    populer?: boolean;
    yeni?: boolean;
    dolu?: boolean;
    burs_orani: number;
}

export default function YurtlarIndex() {
    // Örnek yurt verileri - gerçek uygulamada /data/yurtlar.ts'den gelecek
    const [yurtlar] = useState<Yurt[]>([
        {
            id: 1,
            ad: "TÜGVA İstanbul Erkek Yurdu",
            sehir: "İstanbul",
            ilce: "Fatih",
            kisa_aciklama: "İstanbul'un merkezi konumunda, modern imkanlarla donatılmış erkek öğrenci yurdu",
            detay_aciklama: "Tarihi ve kültürel zenginliği ile İstanbul'un kalbinde, öğrencilerimize hem akademik hem de sosyal gelişim imkanları sunan modern bir yurt ortamı.",
            adres: "Fatih/İstanbul",
            telefon: "+90 212 xxx xxxx",
            email: "istanbul.erkek@tugva.org",
            kapasite: 120,
            ozellikler: ["WiFi", "Çalışma Salonu", "Spor Salonu", "Kütüphane", "Yemekhane"],
            resimler: ["/images/istanbul-erkek-1.jpg"],
            aktif: true,
            cinsiyet: "Erkek",
            slug: "istanbul-erkek-yurdu",
            renk: "#08a4d4",
            populer: true,
            burs_orani: 100
        },
        {
            id: 2,
            ad: "TÜGVA İstanbul Kız Yurdu",
            sehir: "İstanbul",
            ilce: "Üsküdar",
            kisa_aciklama: "İstanbul'da kız öğrenciler için güvenli ve konforlu barınma ortamı",
            detay_aciklama: "Üsküdar'ın huzurlu atmosferinde, kız öğrencilerimize güvenli ve konforlu bir yaşam alanı sunan modern yurt.",
            adres: "Üsküdar/İstanbul",
            telefon: "+90 216 xxx xxxx",
            email: "istanbul.kiz@tugva.org",
            kapasite: 100,
            ozellikler: ["WiFi", "Çalışma Salonu", "Kütüphane", "El Sanatları Atölyesi", "Yemekhane"],
            resimler: ["/images/istanbul-kiz-1.jpg"],
            aktif: true,
            cinsiyet: "Kız",
            slug: "istanbul-kiz-yurdu",
            renk: "#e91e63",
            populer: true,
            burs_orani: 100
        },
        {
            id: 3,
            ad: "TÜGVA Ankara Erkek Yurdu",
            sehir: "Ankara",
            ilce: "Çankaya",
            kisa_aciklama: "Başkent'in merkezinde, üniversitelere yakın konumda erkek öğrenci yurdu",
            detay_aciklama: "Ankara'nın prestijli ilçesi Çankaya'da, üniversitelere yakın konumu ile öğrencilerimize kolaylık sağlayan yurt.",
            adres: "Çankaya/Ankara",
            telefon: "+90 312 xxx xxxx",
            email: "ankara.erkek@tugva.org",
            kapasite: 80,
            ozellikler: ["WiFi", "Çalışma Salonu", "Spor Salonu", "Yemekhane"],
            resimler: ["/images/ankara-erkek-1.jpg"],
            aktif: true,
            cinsiyet: "Erkek",
            slug: "ankara-erkek-yurdu",
            renk: "#27ae60",
            burs_orani: 100
        },
        {
            id: 4,
            ad: "TÜGVA İzmir Erkek Yurdu",
            sehir: "İzmir",
            ilce: "Konak",
            kisa_aciklama: "Ege'nin incisi İzmir'de deniz manzaralı erkek öğrenci yurdu",
            detay_aciklama: "İzmir'in merkezi konumunda, denize yakın lokasyonda öğrencilerimize huzurlu bir yaşam alanı sunan yurt.",
            adres: "Konak/İzmir",
            telefon: "+90 232 xxx xxxx",
            email: "izmir.erkek@tugva.org",
            kapasite: 60,
            ozellikler: ["WiFi", "Çalışma Salonu", "Kütüphane", "Yemekhane", "Deniz Manzarası"],
            resimler: ["/images/izmir-erkek-1.jpg"],
            aktif: true,
            cinsiyet: "Erkek",
            slug: "izmir-erkek-yurdu",
            renk: "#3498db",
            yeni: true,
            burs_orani: 100
        },
        {
            id: 5,
            ad: "TÜGVA Bursa Erkek Yurdu",
            sehir: "Bursa",
            ilce: "Osmangazi",
            kisa_aciklama: "Yeşil Bursa'da tarihi dokuya sahip erkek öğrenci yurdu",
            detay_aciklama: "Bursa'nın tarihi merkezinde, şehrin kültürel zenginliğini yaşayarak öğrenim görmek isteyen öğrenciler için ideal yurt.",
            adres: "Osmangazi/Bursa",
            telefon: "+90 224 xxx xxxx",
            email: "bursa.erkek@tugva.org",
            kapasite: 70,
            ozellikler: ["WiFi", "Çalışma Salonu", "Kütüphane", "Yemekhane"],
            resimler: ["/images/bursa-erkek-1.jpg"],
            aktif: false,
            cinsiyet: "Erkek",
            slug: "bursa-erkek-yurdu",
            renk: "#2ecc71",
            dolu: true,
            burs_orani: 100
        },
        {
            id: 6,
            ad: "TÜGVA Konya Erkek Yurdu",
            sehir: "Konya",
            ilce: "Selçuklu",
            kisa_aciklama: "Mevlana şehrinde manevi atmosferde erkek öğrenci yurdu",
            detay_aciklama: "Konya'nın manevi atmosferinde, öğrencilerimize hem akademik hem de kişisel gelişim imkanları sunan özel bir yurt.",
            adres: "Selçuklu/Konya",
            telefon: "+90 332 xxx xxxx",
            email: "konya.erkek@tugva.org",
            kapasite: 90,
            ozellikler: ["WiFi", "Çalışma Salonu", "Kütüphane", "Seminer Salonu", "Yemekhane"],
            resimler: ["/images/konya-erkek-1.jpg"],
            aktif: true,
            cinsiyet: "Erkek",
            slug: "konya-erkek-yurdu",
            renk: "#e67e22",
            burs_orani: 100
        }
    ]);

    const [seciliSehir, setSeciliSehir] = useState('Tümü');
    const [seciliCinsiyet, setSeciliCinsiyet] = useState('Tümü');
    const [aramaMetni, setAramaMetni] = useState('');
    
    // Şehir listesi
    const sehirler = ['Tümü', ...Array.from(new Set(yurtlar.map(yurt => yurt.sehir))).sort()];
    
    // Cinsiyet filtreleri
    const cinsiyetler = ['Tümü', 'Erkek', 'Kız'];
    
    // Filtrelenmiş yurtlar
    const filtreliYurtlar = yurtlar.filter(yurt => {
        const sehirUygun = seciliSehir === 'Tümü' || yurt.sehir === seciliSehir;
        const cinsiyetUygun = seciliCinsiyet === 'Tümü' || yurt.cinsiyet === seciliCinsiyet;
        const aramaUygun = yurt.ad.toLowerCase().includes(aramaMetni.toLowerCase()) ||
                          yurt.sehir.toLowerCase().includes(aramaMetni.toLowerCase()) ||
                          yurt.ilce.toLowerCase().includes(aramaMetni.toLowerCase());
        return sehirUygun && cinsiyetUygun && aramaUygun;
    });

    // Popüler yurtlar
    const populerYurtlar = yurtlar.filter(yurt => yurt.populer);

    const handleDetayGor = (yurt: Yurt) => {
        // Gerçek uygulamada: router.push(`/yurtlar/${yurt.slug}`)
        window.location.href = `/yurtlar/${yurt.slug}`;
    };

    const handleBasvuru = (yurt: Yurt) => {
        if (yurt.aktif) {
            window.location.href = '/yurt-basvuru';
        }
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            {/* Hero Section */}
            <section className="hero" style={{
                background: 'linear-gradient(135deg, #08a4d4 0%, #0892c0 100%)',
                color: 'white',
                textAlign: 'center',
                padding: '150px 20px 100px',
                marginTop: '70px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Arka plan şekilleri */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-100px',
                    left: '-100px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite reverse'
                }}></div>

                <div className="hero-content" style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '25px',
                        fontWeight: '800',
                        letterSpacing: '-2px',
                        textShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}>
                        🏠 <span style={{color: '#FFD700'}}>TÜGVA</span> Yurtları
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                        marginBottom: '40px',
                        opacity: '0.95',
                        lineHeight: '1.8',
                        maxWidth: '700px',
                        margin: '0 auto 40px'
                    }}>
                        Türkiye genelindeki yurtlarımızda güvenli, konforlu ve eğitici bir yaşam ortamı. 
                        %100 burslu konaklama imkanı ile geleceğinizi şekillendirin.
                    </p>
                    
                    {/* İstatistikler */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                        marginBottom: '40px'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '5px' }}>
                                {yurtlar.length}
                            </div>
                            <div style={{ fontSize: '1rem', opacity: '0.9' }}>Yurt</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '5px' }}>
                                {sehirler.length - 1}
                            </div>
                            <div style={{ fontSize: '1rem', opacity: '0.9' }}>Şehir</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '5px' }}>
                                %100
                            </div>
                            <div style={{ fontSize: '1rem', opacity: '0.9' }}>Burslu</div>
                        </div>
                    </div>
                    
                    {/* CTA Butonları */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = 'rgba(255, 255, 255, 0.3)';
                            target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = 'rgba(255, 255, 255, 0.2)';
                            target.style.transform = 'translateY(0)';
                        }}>
                            🔍 Yurtları Keşfet
                        </button>
                        <button 
                            onClick={() => window.location.href = '/yurt-basvuru'}
                            style={{
                            background: 'white',
                            color: '#08a4d4',
                            border: '2px solid white',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.transform = 'translateY(-2px)';
                            target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.transform = 'translateY(0)';
                            target.style.boxShadow = 'none';
                        }}>
                            📝 Hemen Başvur
                        </button>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                `}</style>
            </section>

            {/* Popüler Yurtlar Section */}
            <section style={{
                padding: '80px 20px 60px',
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            marginBottom: '15px',
                            fontWeight: '700',
                            color: '#333'
                        }}>
                            ⭐ Popüler Yurtlarımız
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#666',
                            maxWidth: '500px',
                            margin: '0 auto'
                        }}>
                            En çok tercih edilen ve konforlu yurtlarımız
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
                        gap: '25px'
                    }}>
                        {populerYurtlar.slice(0, 3).map(yurt => (
                            <div
                                key={yurt.id}
                                style={{
                                    background: 'white',
                                    borderRadius: '15px',
                                    padding: '30px',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    border: `3px solid ${yurt.renk}20`,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${yurt.renk}30`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                }}
                                onClick={() => handleDetayGor(yurt)}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: '#FFD700',
                                    color: '#333',
                                    padding: '5px 10px',
                                    borderRadius: '12px',
                                    fontSize: '0.8rem',
                                    fontWeight: '600'
                                }}>
                                    ⭐ Popüler
                                </div>
                                
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <div style={{ 
                                        fontSize: '3.5rem', 
                                        marginBottom: '15px',
                                        color: yurt.cinsiyet === 'Kız' ? '#e91e63' : '#08a4d4'
                                    }}>
                                        {yurt.cinsiyet === 'Kız' ? '👩‍🎓' : '👨‍🎓'}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: '#333',
                                        marginBottom: '10px'
                                    }}>
                                        {yurt.ad}
                                    </h3>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                                        <span style={{
                                            background: yurt.renk + '20',
                                            color: yurt.renk,
                                            padding: '3px 8px',
                                            borderRadius: '8px',
                                            fontSize: '0.8rem',
                                            fontWeight: '500'
                                        }}>
                                            📍 {yurt.sehir}
                                        </span>
                                        <span style={{
                                            background: yurt.renk + '20',
                                            color: yurt.renk,
                                            padding: '3px 8px',
                                            borderRadius: '8px',
                                            fontSize: '0.8rem',
                                            fontWeight: '500'
                                        }}>
                                            👥 {yurt.kapasite} Kişi
                                        </span>
                                    </div>
                                    <div style={{
                                        background: '#e8f5e8',
                                        color: '#27ae60',
                                        padding: '5px 10px',
                                        borderRadius: '15px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        display: 'inline-block'
                                    }}>
                                        💰 %{yurt.burs_orani} Burslu
                                    </div>
                                </div>
                                
                                <p style={{
                                    color: '#666',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    textAlign: 'center',
                                    marginBottom: '20px'
                                }}>
                                    {yurt.kisa_aciklama}
                                </p>

                                {/* Özellikler */}
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333', marginBottom: '8px' }}>
                                        🎯 Özellikler:
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {yurt.ozellikler.slice(0, 3).map(ozellik => (
                                            <span key={ozellik} style={{
                                                background: '#f8f9fa',
                                                color: '#666',
                                                padding: '2px 6px',
                                                borderRadius: '6px',
                                                fontSize: '0.8rem'
                                            }}>
                                                {ozellik}
                                            </span>
                                        ))}
                                        {yurt.ozellikler.length > 3 && (
                                            <span style={{ fontSize: '0.8rem', color: '#999' }}>
                                                +{yurt.ozellikler.length - 3} daha
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ana Yurtlar Section */}
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: 'clamp(40px, 8vw, 80px) 20px'
            }}>
                {/* Arama ve Filtreler */}
                <section style={{ marginBottom: '60px' }}>
                    {/* Başlık */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                            marginBottom: '15px',
                            fontWeight: '700',
                            color: '#333'
                        }}>
                            Tüm Yurtlarımız
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666'
                        }}>
                            Size en uygun yurdu bulun
                        </p>
                    </div>

                    {/* Arama Çubuğu */}
                    <div style={{
                        maxWidth: '500px',
                        margin: '0 auto 30px',
                        position: 'relative'
                    }}>
                        <input
                            type="text"
                            placeholder="Yurt, şehir veya ilçe ara... (örn: İstanbul, Ankara)"
                            value={aramaMetni}
                            onChange={(e) => setAramaMetni(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '15px 50px 15px 20px',
                                fontSize: '1.1rem',
                                border: '2px solid #e9ecef',
                                borderRadius: '50px',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#08a4d4';
                                e.target.style.boxShadow = '0 0 0 3px rgba(8, 164, 212, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#e9ecef';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#999',
                            fontSize: '1.2rem'
                        }}>
                            🔍
                        </div>
                    </div>

                    {/* Filtre Butonları */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '15px',
                        marginBottom: '20px'
                    }}>
                        {/* Şehir Filtreleri */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {sehirler.slice(0, 6).map(sehir => (
                                <button
                                    key={sehir}
                                    onClick={() => setSeciliSehir(sehir)}
                                    style={{
                                        background: seciliSehir === sehir 
                                            ? 'linear-gradient(135deg, #08a4d4, #0892c0)' 
                                            : 'white',
                                        color: seciliSehir === sehir ? 'white' : '#08a4d4',
                                        border: '2px solid #08a4d4',
                                        padding: '8px 16px',
                                        borderRadius: '25px',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (seciliSehir !== sehir) {
                                            const target = e.target as HTMLButtonElement;
                                            target.style.background = 'linear-gradient(135deg, #08a4d4, #0892c0)';
                                            target.style.color = 'white';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (seciliSehir !== sehir) {
                                            const target = e.target as HTMLButtonElement;
                                            target.style.background = 'white';
                                            target.style.color = '#08a4d4';
                                        }
                                    }}
                                >
                                    {sehir === 'Tümü' && '🌍 '}
                                    {sehir}
                                </button>
                            ))}
                        </div>

                        {/* Cinsiyet Filtreleri */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {cinsiyetler.map(cinsiyet => (
                                <button
                                    key={cinsiyet}
                                    onClick={() => setSeciliCinsiyet(cinsiyet)}
                                    style={{
                                        background: seciliCinsiyet === cinsiyet 
                                            ? 'linear-gradient(135deg, #e91e63, #c2185b)' 
                                            : 'white',
                                        color: seciliCinsiyet === cinsiyet ? 'white' : '#e91e63',
                                        border: '2px solid #e91e63',
                                        padding: '8px 16px',
                                        borderRadius: '25px',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (seciliCinsiyet !== cinsiyet) {
                                            const target = e.target as HTMLButtonElement;
                                            target.style.background = 'linear-gradient(135deg, #e91e63, #c2185b)';
                                            target.style.color = 'white';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (seciliCinsiyet !== cinsiyet) {
                                            const target = e.target as HTMLButtonElement;
                                            target.style.background = 'white';
                                            target.style.color = '#e91e63';
                                        }
                                    }}
                                >
                                    {cinsiyet === 'Tümü' && '👥 '}
                                    {cinsiyet === 'Erkek' && '👨‍🎓 '}
                                    {cinsiyet === 'Kız' && '👩‍🎓 '}
                                    {cinsiyet}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sonuç Sayısı */}
                    <div style={{ textAlign: 'center', color: '#666', fontSize: '1rem' }}>
                        {filtreliYurtlar.length} yurt bulundu
                    </div>
                </section>

                {/* Yurtlar Grid */}
                <section>
                    {filtreliYurtlar.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 20px',
                            color: '#666'
                        }}>
                            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                                Aradığınız kriterlere uygun yurt bulunamadı
                            </h3>
                            <p>Farklı bir şehir seçmeyi veya arama terimini değiştirmeyi deneyin.</p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
                            gap: 'clamp(20px, 4vw, 30px)'
                        }}>
                            {filtreliYurtlar.map(yurt => (
                                <div
                                    key={yurt.id}
                                    style={{
                                        background: 'white',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        border: `2px solid ${yurt.renk}15`,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        opacity: yurt.aktif ? 1 : 0.8,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (yurt.aktif) {
                                            e.currentTarget.style.transform = 'translateY(-10px)';
                                            e.currentTarget.style.boxShadow = `0 20px 40px ${yurt.renk}25`;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    {/* Üst Kısım - Renkli Header */}
                                    <div style={{
                                        background: `linear-gradient(135deg, ${yurt.renk}, ${yurt.renk}dd)`,
                                        padding: '25px 20px',
                                        textAlign: 'center',
                                        position: 'relative',
                                        color: 'white'
                                    }}>
                                        {/* Rozet */}
                                        {yurt.yeni && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                background: '#e74c3c',
                                                color: 'white',
                                                padding: '4px 8px',
                                                borderRadius: '10px',
                                                fontSize: '0.7rem',
                                                fontWeight: '600'
                                            }}>
                                                🆕 Yeni
                                            </div>
                                        )}

                                        {yurt.dolu && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '10px',
                                                right: '10px',
                                                background: '#f39c12',
                                                color: 'white',
                                                padding: '4px 8px',
                                                borderRadius: '10px',
                                                fontSize: '0.7rem',
                                                fontWeight: '600'
                                            }}>
                                                ⏳ Dolu
                                            </div>
                                        )}
                                        
                                        <div style={{
                                            fontSize: '3rem',
                                            marginBottom: '10px'
                                        }}>
                                            {yurt.cinsiyet === 'Kız' ? '👩‍🎓' : '👨‍🎓'}
                                        </div>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            fontWeight: '700',
                                            marginBottom: '8px',
                                            lineHeight: '1.3'
                                        }}>
                                            {yurt.ad}
                                        </h3>
                                        <div style={{
                                            background: 'rgba(255, 255, 255, 0.2)',
                                            padding: '4px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            display: 'inline-block'
                                        }}>
                                            📍 {yurt.sehir} / {yurt.ilce}
                                        </div>
                                    </div>

                                    {/* Alt Kısım - İçerik */}
                                    <div style={{ 
                                        padding: '20px', 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        flexGrow: 1 
                                    }}>
                                        {/* Kısa Açıklama */}
                                        <p style={{
                                            color: '#666',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.5',
                                            marginBottom: '15px',
                                            fontWeight: '500'
                                        }}>
                                            {yurt.kisa_aciklama}
                                        </p>

                                        {/* Bilgiler */}
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '10px',
                                            marginBottom: '15px'
                                        }}>
                                            <div style={{
                                                background: '#f8f9fa',
                                                padding: '8px',
                                                borderRadius: '8px',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{ fontSize: '0.8rem', color: '#666' }}>Kapasite</div>
                                                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#333' }}>
                                                    👥 {yurt.kapasite}
                                                </div>
                                            </div>
                                            <div style={{
                                                background: '#e8f5e8',
                                                padding: '8px',
                                                borderRadius: '8px',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{ fontSize: '0.8rem', color: '#666' }}>Burs Oranı</div>
                                                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#27ae60' }}>
                                                    💰 %{yurt.burs_orani}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Özellikler */}
                                        <div style={{ marginBottom: '20px', flexGrow: 1 }}>
                                            <div style={{ 
                                                fontSize: '0.9rem', 
                                                fontWeight: '600', 
                                                color: '#333', 
                                                marginBottom: '8px' 
                                            }}>
                                                🎯 Özellikler:
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                                {yurt.ozellikler.slice(0, 4).map(ozellik => (
                                                    <span key={ozellik} style={{
                                                        background: yurt.renk + '15',
                                                        color: yurt.renk,
                                                        padding: '3px 8px',
                                                        borderRadius: '12px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '500'
                                                    }}>
                                                        {ozellik}
                                                    </span>
                                                ))}
                                                {yurt.ozellikler.length > 4 && (
                                                    <span style={{ 
                                                        fontSize: '0.8rem', 
                                                        color: '#999',
                                                        padding: '3px 8px'
                                                    }}>
                                                        +{yurt.ozellikler.length - 4} daha
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Alt kısım - Durum ve Butonlar */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}>
                                            <span style={{
                                                background: yurt.aktif ? '#e8f5e8' : '#f5f5f5',
                                                color: yurt.aktif ? '#27ae60' : '#95a5a6',
                                                padding: '6px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}>
                                                {yurt.aktif ? '✅ Açık' : yurt.dolu ? '⏳ Dolu' : '❌ Kapalı'}
                                            </span>
                                            
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDetayGor(yurt);
                                                    }}
                                                    style={{
                                                        background: 'transparent',
                                                        color: yurt.renk,
                                                        border: `2px solid ${yurt.renk}`,
                                                        padding: '8px 16px',
                                                        borderRadius: '20px',
                                                        fontSize: '0.85rem',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        const target = e.target as HTMLButtonElement;
                                                        target.style.background = yurt.renk;
                                                        target.style.color = 'white';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        const target = e.target as HTMLButtonElement;
                                                        target.style.background = 'transparent';
                                                        target.style.color = yurt.renk;
                                                    }}
                                                >
                                                    👁️ Detay
                                                </button>
                                                
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleBasvuru(yurt);
                                                    }}
                                                    disabled={!yurt.aktif}
                                                    style={{
                                                        background: yurt.aktif ? yurt.renk : '#95a5a6',
                                                        color: 'white',
                                                        border: 'none',
                                                        padding: '8px 16px',
                                                        borderRadius: '20px',
                                                        fontSize: '0.85rem',
                                                        fontWeight: '600',
                                                        cursor: yurt.aktif ? 'pointer' : 'not-allowed',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (yurt.aktif) {
                                                            const target = e.target as HTMLButtonElement;
                                                            target.style.transform = 'scale(1.05)';
                                                            target.style.boxShadow = `0 4px 15px ${yurt.renk}50`;
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (yurt.aktif) {
                                                            const target = e.target as HTMLButtonElement;
                                                            target.style.transform = 'scale(1)';
                                                            target.style.boxShadow = 'none';
                                                        }
                                                    }}
                                                >
                                                    {yurt.aktif ? '📝 Başvur' : '📋 Bilgi Al'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* İletişim Section */}
                <section style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '20px',
                    padding: '50px 30px',
                    textAlign: 'center',
                    marginTop: '80px'
                }}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: '700',
                        color: '#333',
                        marginBottom: '15px'
                    }}>
                        🤝 Size Yardımcı Olalım
                    </h3>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#666',
                        marginBottom: '30px',
                        maxWidth: '600px',
                        margin: '0 auto 30px'
                    }}>
                        Yurt seçimi konusunda kararsız mısınız? Uzmanlarımızla görüşerek 
                        size en uygun yurdu bulmanızı sağlayabiliriz.
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        flexWrap: 'wrap'
                    }}>
                        <button style={{
                            background: '#08a4d4',
                            color: 'white',
                            border: 'none',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.transform = 'translateY(-2px)';
                            target.style.boxShadow = '0 8px 25px rgba(8, 164, 212, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.transform = 'translateY(0)';
                            target.style.boxShadow = 'none';
                        }}>
                            📞 Hemen Ara
                        </button>
                        
                        <button style={{
                            background: 'transparent',
                            color: '#08a4d4',
                            border: '2px solid #08a4d4',
                            padding: '15px 30px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = '#08a4d4';
                            target.style.color = 'white';
                            target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            const target = e.target as HTMLButtonElement;
                            target.style.background = 'transparent';
                            target.style.color = '#08a4d4';
                            target.style.transform = 'translateY(0)';
                        }}>
                            💬 WhatsApp
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}