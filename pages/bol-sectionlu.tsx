import { useState, useEffect } from 'react';
import Script from 'next/script';

interface ProjeBilgisi {
    baslik: string;
    kisa_aciklama: string;
    detay_aciklama: string;
    icon: string;
    kategoriler: string[];
    ozellikler: string[];
    sure: string;
    basvuruTarihleri: string;
    hedefKitle: string;
    kontenjan: string;
    lokasyon: string;
    ucret: string;
    iletisim: string;
}

interface ProjeBilgileri {
    [key: number]: ProjeBilgisi;
}

export default function TugvaBasvuruSayfa() {
    const [projeId] = useState(4);
    const [activeTab, setActiveTab] = useState('ozellikler');
    
    const ana_renk = "#08a4d4";
    const ikincil_renk = "#2c3e50";
    const vurgu_renk = "#f39c12";
    
    const projeBilgileri: ProjeBilgileri = {
        1: {
            baslik: "TÜGVA Yurtları",
            kisa_aciklama: "Eğitim hayatını destekleyen güvenli ve konforlu yurt ortamı",
            detay_aciklama: "Eğitim hayatını sadece derslerle değil; kültürel, sosyal ve manevi yönden de destekliyoruz. Modern imkanlar ve rehberlik hizmetleriyle geleceğe hazırlanın.",
            icon: "🏠",
            kategoriler: ["Üniversite", "Lise"],
            ozellikler: [
                "🛏️ Modern ve temiz odalar",
                "📚 Çalışma alanları ve kütüphane",
                "🍽️ Beslenme hizmetleri",
                "🏃‍♂️ Spor ve sosyal alanlar",
                "👨‍🏫 Akademik danışmanlık",
                "🔒 24/7 güvenlik hizmeti"
            ],
            sure: "Eğitim dönemi boyunca",
            basvuruTarihleri: "15 Haziran - 15 Eylül 2024",
            hedefKitle: "Üniversite ve Lise öğrencileri",
            kontenjan: "500 kişi",
            lokasyon: "İstanbul, Ankara, İzmir",
            ucret: "Uygun fiyat seçenekleri",
            iletisim: "yurt@tugva.org.tr"
        },
        4: {
            baslik: "Seninle 40 Hadis",
            kisa_aciklama: "Hadislerle manevi bir yolculuk",
            detay_aciklama: "40 hadis üzerinden gençlere ilham veren, anlamlı ve içten bir eğitim serisi. Her hafta farklı bir hadisi derinlemesine inceleyerek günlük yaşamımıza nasıl uygulayabileceğimizi öğreneceğiz.",
            icon: "📜",
            kategoriler: ["Üniversite", "Lise"],
            ozellikler: [
                "📖 40 seçkin hadisin detaylı incelenmesi",
                "🎯 Günlük yaşama uygulanabilir dersler",
                "👥 Grup tartışmaları ve değerlendirmeler",
                "📝 İnteraktif çalışma materyalleri",
                "🎓 Sertifika ve takdir belgesi",
                "📱 Online kaynak erişimi"
            ],
            sure: "8 hafta (16 saat eğitim)",
            basvuruTarihleri: "1 Mart - 30 Nisan 2024",
            hedefKitle: "16-25 yaş arası gençler",
            kontenjan: "150 kişi",
            lokasyon: "Online + İstanbul Merkez",
            ucret: "Ücretsiz",
            iletisim: "hadis@tugva.org.tr"
        }
    };

    const proje = projeBilgileri[projeId] || projeBilgileri[4];
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // FormLoader script'i Next Script ile sayfada yüklenecek

    const handleScrollToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isEnter: boolean) => {
        const target = e.target as HTMLButtonElement;
        if (isEnter) {
            target.style.transform = 'translateY(-3px) scale(1.02)';
            target.style.boxShadow = `0 12px 35px ${vurgu_renk}50`;
        } else {
            target.style.transform = 'translateY(0) scale(1)';
            target.style.boxShadow = `0 8px 25px ${vurgu_renk}40`;
        }
    };

    const stats = [
        { number: "15+", label: "Yıllık Deneyim", icon: "🏆" },
        { number: "50K+", label: "Katılımcı", icon: "👥" },
        { number: "95%", label: "Memnuniyet", icon: "⭐" },
        { number: "24/7", label: "Destek", icon: "🔧" }
    ];

    const testimonials = [
        {
            name: "Ahmet Yılmaz",
            role: "Üniversite Öğrencisi",
            content: "Bu proje sayesinde hem manevi hem de kişisel gelişimimde büyük adımlar attım. Özellikle grup tartışmaları çok verimli geçiyordu.",
            rating: 5,
            avatar: "👨‍🎓"
        },
        {
            name: "Fatma Demir",
            role: "Lise Öğrencisi",
            content: "40 hadis programı hayatıma anlam katmış, günlük yaşantımda daha bilinçli olmamı sağlamıştı. Kesinlikle tavsiye ederim.",
            rating: 5,
            avatar: "👩‍🎓"
        },
        {
            name: "Mehmet Kaya",
            role: "Üniversite Mezunu",
            content: "Eğitmenler gerçekten uzman ve sabırlı. Her sorumuzu detaylıca cevapladılar ve bizimle yakından ilgilendiler.",
            rating: 5,
            avatar: "👨‍💼"
        }
    ];

    const faqs = [
        {
            question: "Programa nasıl başvuru yapabilirim?",
            answer: "Sayfanın alt kısmındaki formu doldurarak kolayca başvuru yapabilirsiniz. Başvurunuz 48 saat içinde değerlendirilir."
        },
        {
            question: "Program ücreti var mı?",
            answer: "Seninle 40 Hadis programı tamamen ücretsizdir. Sadece katılım ve istikrar bekliyoruz."
        },
        {
            question: "Online katılım mümkün mü?",
            answer: "Evet, hibrit model kullanıyoruz. Hem online hem de İstanbul merkezimizde yüz yüze katılım imkanı var."
        },
        {
            question: "Sertifika verilir mi?",
            answer: "Programı başarıyla tamamlayan tüm katılımcılara TÜGVA onaylı sertifika verilir."
        }
    ];

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <Script src="https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js" strategy="afterInteractive" />
            {/* Hero Section - Mevcut kod korundu */}
            <section style={{
                background: `linear-gradient(135deg, ${ana_renk} 0%, #0892c0 50%, ${ikincil_renk} 100%)`,
                color: 'white',
                padding: '120px 20px 100px',
                marginTop: '70px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '50%',
                    transform: `translateY(${scrollY * 0.1}px)`,
                    animation: 'pulse 4s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '8%',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(243, 156, 18, 0.1)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    transform: `translateY(${scrollY * -0.05}px)`,
                    animation: 'rotate 20s linear infinite'
                }}></div>

                <div className="container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    <div style={{ zIndex: 2, position: 'relative' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            marginBottom: '25px'
                        }}>
                            <span style={{ 
                                fontSize: '4rem',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                            }}>{proje.icon}</span>
                            <div>
                                {proje.kategoriler.map((kategori: string) => (
                                    <span key={kategori} style={{
                                        background: 'rgba(255, 255, 255, 0.15)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        padding: '8px 16px',
                                        borderRadius: '25px',
                                        fontSize: '0.95rem',
                                        fontWeight: '600',
                                        marginRight: '10px',
                                        display: 'inline-block',
                                        marginBottom: '5px'
                                    }}>
                                        {kategori}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <h1 style={{
                            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                            fontWeight: '900',
                            marginBottom: '25px',
                            lineHeight: '1.1',
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {proje.baslik}
                        </h1>
                        
                        <p style={{
                            fontSize: '1.4rem',
                            opacity: '0.95',
                            marginBottom: '20px',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}>
                            {proje.kisa_aciklama}
                        </p>
                        
                        <p style={{
                            fontSize: '1.1rem',
                            opacity: '0.85',
                            lineHeight: '1.7',
                            marginBottom: '40px'
                        }}>
                            {proje.detay_aciklama}
                        </p>

                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => handleScrollToElement('basvuru-formu')}
                                style={{
                                    background: `linear-gradient(135deg, ${vurgu_renk}, #e67e22)`,
                                    color: 'white',
                                    border: 'none',
                                    padding: '20px 40px',
                                    borderRadius: '50px',
                                    fontSize: '1.3rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: `0 8px 25px ${vurgu_renk}40`,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => handleButtonHover(e, true)}
                                onMouseLeave={(e) => handleButtonHover(e, false)}
                            >
                                🚀 Hemen Başvur
                            </button>
                            
                            <button
                                onClick={() => handleScrollToElement('proje-detaylari')}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    padding: '18px 35px',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    const target = e.target as HTMLButtonElement;
                                    target.style.background = 'rgba(255, 255, 255, 0.2)';
                                    target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    const target = e.target as HTMLButtonElement;
                                    target.style.background = 'rgba(255, 255, 255, 0.1)';
                                    target.style.transform = 'translateY(0)';
                                }}
                            >
                                📋 Detayları İncele
                            </button>
                        </div>
                    </div>

                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '25px',
                        padding: '40px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-50%',
                            width: '100%',
                            height: '100%',
                            background: 'rgba(243, 156, 18, 0.05)',
                            borderRadius: '50%'
                        }}></div>
                        
                        <h3 style={{
                            fontSize: '1.6rem',
                            fontWeight: '700',
                            marginBottom: '30px',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            📊 Hızlı Bilgiler
                        </h3>
                        
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '20px',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {[
                                { icon: '⏰', label: 'Süre', value: proje.sure },
                                { icon: '📅', label: 'Başvuru', value: proje.basvuruTarihleri },
                                { icon: '👥', label: 'Hedef', value: proje.hedefKitle },
                                { icon: '📍', label: 'Lokasyon', value: proje.lokasyon }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 0',
                                    borderBottom: index < 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                                }}>
                                    <span style={{ 
                                        opacity: '0.9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '1rem'
                                    }}>
                                        {item.icon} {item.label}:
                                    </span>
                                    <strong style={{ fontSize: '0.95rem', textAlign: 'right', maxWidth: '60%' }}>
                                        {item.value}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* İstatistik Şeridi */}
            <section style={{
                background: '#fff',
                padding: '60px 20px',
                borderBottom: '1px solid #f0f0f0'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '40px',
                        textAlign: 'center'
                    }}>
                        {stats.map((stat, index) => (
                            <div key={index} style={{
                                padding: '20px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}>
                                <div style={{ 
                                    fontSize: '3rem', 
                                    marginBottom: '10px',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}>
                                    {stat.icon}
                                </div>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '800',
                                    color: ana_renk,
                                    marginBottom: '5px'
                                }}>
                                    {stat.number}
                                </div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: '#666',
                                    fontWeight: '600'
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proje Detayları - Modern Tab Sistemi */}
            <section id="proje-detaylari" style={{
                padding: '100px 20px',
                background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            color: ikincil_renk,
                            marginBottom: '20px'
                        }}>
                            Proje Hakkında Her Şey
                        </h2>
                        <div style={{
                            width: '100px',
                            height: '4px',
                            background: `linear-gradient(90deg, ${ana_renk}, ${vurgu_renk})`,
                            margin: '0 auto',
                            borderRadius: '2px'
                        }}></div>
                    </div>

                    {/* Tab Navigation */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '50px',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}>
                        {[
                            { key: 'ozellikler', label: '✨ Özellikler', icon: '📋' },
                            { key: 'program', label: '📚 Program İçeriği', icon: '📖' },
                            { key: 'fayda', label: '🎯 Kazanımlar', icon: '🏆' },
                            { key: 'sss', label: '❓ S.S.S', icon: '💬' }
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                style={{
                                    background: activeTab === tab.key ? 
                                        `linear-gradient(135deg, ${ana_renk}, ${ana_renk}dd)` : 'white',
                                    color: activeTab === tab.key ? 'white' : ana_renk,
                                    border: `2px solid ${ana_renk}`,
                                    padding: '15px 25px',
                                    borderRadius: '50px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: activeTab === tab.key ? 
                                        `0 8px 25px ${ana_renk}30` : '0 2px 10px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeTab !== tab.key) {
                                        e.currentTarget.style.background = `${ana_renk}10`;
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeTab !== tab.key) {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div style={{
                        background: 'white',
                        borderRadius: '25px',
                        padding: '50px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                        border: '1px solid #f0f0f0',
                        minHeight: '400px'
                    }}>
                        {/* Özellikler Tab */}
                        {activeTab === 'ozellikler' && (
                            <div>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: ikincil_renk,
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}>
                                    ✨ Program Özellikleri
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '25px'
                                }}>
                                    {proje.ozellikler.map((ozellik, index) => (
                                        <div key={index} style={{
                                            background: `linear-gradient(135deg, ${ana_renk}05, ${vurgu_renk}05)`,
                                            border: `2px solid ${ana_renk}15`,
                                            borderRadius: '15px',
                                            padding: '25px',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = `0 15px 30px ${ana_renk}20`;
                                            e.currentTarget.style.borderColor = ana_renk;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.borderColor = `${ana_renk}15`;
                                        }}>
                                            <p style={{
                                                fontSize: '1.2rem',
                                                color: ikincil_renk,
                                                fontWeight: '600',
                                                margin: 0,
                                                lineHeight: '1.6'
                                            }}>
                                                {ozellik}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Program Tab */}
                        {activeTab === 'program' && (
                            <div>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: ikincil_renk,
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}>
                                    📚 Program Akışı
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '30px'
                                }}>
                                    {[
                                        { hafta: '1-2. Hafta', konu: 'Temel Hadis Bilgisi', aciklama: 'Hadis ilmi ve kaynaklarına giriş' },
                                        { hafta: '3-4. Hafta', konu: 'Ahlak ve Karakter', aciklama: 'Güzel ahlak üzerine hadisler' },
                                        { hafta: '5-6. Hafta', konu: 'İbadet ve Maneviyat', aciklama: 'İbadet hayatını güçlendiren hadisler' },
                                        { hafta: '7-8. Hafta', konu: 'Sosyal İlişkiler', aciklama: 'Toplumsal yaşamda hadislerin yeri' }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            background: 'white',
                                            border: '1px solid #e9ecef',
                                            borderRadius: '15px',
                                            padding: '25px',
                                            position: 'relative',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                            e.currentTarget.style.boxShadow = `0 10px 25px ${ana_renk}15`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '0',
                                                left: '0',
                                                width: '100%',
                                                height: '4px',
                                                background: `linear-gradient(90deg, ${ana_renk}, ${vurgu_renk})`
                                            }}></div>
                                            <div style={{
                                                background: ana_renk,
                                                color: 'white',
                                                borderRadius: '25px',
                                                padding: '5px 15px',
                                                fontSize: '0.9rem',
                                                fontWeight: '600',
                                                display: 'inline-block',
                                                marginBottom: '15px'
                                            }}>
                                                {item.hafta}
                                            </div>
                                            <h4 style={{
                                                fontSize: '1.3rem',
                                                fontWeight: '700',
                                                color: ikincil_renk,
                                                marginBottom: '10px'
                                            }}>
                                                {item.konu}
                                            </h4>
                                            <p style={{
                                                color: '#666',
                                                fontSize: '1rem',
                                                lineHeight: '1.6',
                                                margin: 0
                                            }}>
                                                {item.aciklama}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Kazanımlar Tab */}
                        {activeTab === 'fayda' && (
                            <div>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: ikincil_renk,
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}>
                                    🎯 Bu Programdan Kazanacaklarınız
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '30px'
                                }}>
                                    {[
                                        { 
                                            icon: '🧠', 
                                            baslik: 'Derin Düşünce', 
                                            aciklama: 'Hadislerdeki hikmetleri anlayarak yaşama dair derin perspektif kazanacaksınız' 
                                        },
                                        { 
                                            icon: '💝', 
                                            baslik: 'Manevi Gelişim', 
                                            aciklama: 'İçsel huzur ve manevi tatmin için pratik yöntemler öğreneceksiniz' 
                                        },
                                        { 
                                            icon: '🤝', 
                                            baslik: 'Sosyal Beceriler', 
                                            aciklama: 'Grup çalışmaları ile iletişim ve empati becerilerinizi geliştireceksiniz' 
                                        },
                                        { 
                                            icon: '📚', 
                                            baslik: 'Akademik Donanım', 
                                            aciklama: 'Hadis metodolojisi ve kaynak araştırma tekniklerini öğreneceksiniz' 
                                        },
                                        { 
                                            icon: '🎓', 
                                            baslik: 'Sertifika', 
                                            aciklama: 'TÜGVA onaylı katılım sertifikası ile CV\'nizi güçlendireceksiniz' 
                                        },
                                        { 
                                            icon: '🌟', 
                                            baslik: 'Yaşam Boyu Fayda', 
                                            aciklama: 'Öğrendiklerinizi hayat boyu uygulayabileceğiniz pratik bilgiler' 
                                        }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            background: 'white',
                                            borderRadius: '20px',
                                            padding: '30px',
                                            textAlign: 'center',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                            border: '1px solid #f0f0f0',
                                            transition: 'all 0.3s ease',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px)';
                                            e.currentTarget.style.boxShadow = `0 20px 40px ${ana_renk}15`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '0',
                                                left: '0',
                                                width: '100%',
                                                height: '4px',
                                                background: `linear-gradient(90deg, ${ana_renk}, ${vurgu_renk})`,
                                                borderRadius: '20px 20px 0 0'
                                            }}></div>
                                            <div style={{
                                                fontSize: '3.5rem',
                                                marginBottom: '20px',
                                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                                            }}>
                                                {item.icon}
                                            </div>
                                            <h4 style={{
                                                fontSize: '1.4rem',
                                                fontWeight: '700',
                                                color: ikincil_renk,
                                                marginBottom: '15px'
                                            }}>
                                                {item.baslik}
                                            </h4>
                                            <p style={{
                                                color: '#666',
                                                fontSize: '1rem',
                                                lineHeight: '1.6',
                                                margin: 0
                                            }}>
                                                {item.aciklama}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* S.S.S Tab */}
                        {activeTab === 'sss' && (
                            <div>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: ikincil_renk,
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}>
                                    💬 Sıkça Sorulan Sorular
                                </h3>
                                <div style={{
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}>
                                    {faqs.map((faq, index) => (
                                        <details key={index} style={{
                                            background: 'white',
                                            border: `2px solid ${ana_renk}15`,
                                            borderRadius: '15px',
                                            padding: '0',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <summary style={{
                                                background: `linear-gradient(135deg, ${ana_renk}08, ${ana_renk}03)`,
                                                padding: '20px 25px',
                                                fontSize: '1.2rem',
                                                fontWeight: '600',
                                                color: ikincil_renk,
                                                cursor: 'pointer',
                                                borderBottom: `1px solid ${ana_renk}15`,
                                                transition: 'all 0.3s ease',
                                                listStyle: 'none'
                                            }}>
                                                <span style={{ marginRight: '10px' }}>❓</span>
                                                {faq.question}
                                            </summary>
                                            <div style={{
                                                padding: '25px',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.7',
                                                color: '#555'
                                            }}>
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Katılımcı Yorumları */}
            <section style={{
                padding: '100px 20px',
                background: `linear-gradient(135deg, ${ikincil_renk}05, ${ana_renk}05)`
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            color: ikincil_renk,
                            marginBottom: '20px'
                        }}>
                            💬 Katılımcılarımız Diyor Ki
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Programımıza katılan gençlerimizin deneyimleri
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px'
                    }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '35px',
                                boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                                border: '1px solid #f0f0f0',
                                transition: 'all 0.3s ease',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = `0 25px 50px ${ana_renk}15`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08)';
                            }}>
                                {/* Tırnak İşareti */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '25px',
                                    fontSize: '3rem',
                                    color: ana_renk,
                                    background: 'white',
                                    padding: '0 10px'
                                }}>
                                    "
                                </div>
                                
                                {/* Yıldızlar */}
                                <div style={{
                                    display: 'flex',
                                    gap: '5px',
                                    marginBottom: '20px',
                                    justifyContent: 'center'
                                }}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} style={{ color: '#FFD700', fontSize: '1.2rem' }}>⭐</span>
                                    ))}
                                </div>

                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#555',
                                    lineHeight: '1.7',
                                    marginBottom: '25px',
                                    fontStyle: 'italic',
                                    textAlign: 'center'
                                }}>
                                    {testimonial.content}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '15px'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        background: `${ana_renk}15`,
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '1.1rem',
                                            fontWeight: '700',
                                            color: ikincil_renk,
                                            marginBottom: '3px'
                                        }}>
                                            {testimonial.name}
                                        </div>
                                        <div style={{
                                            fontSize: '0.95rem',
                                            color: '#666'
                                        }}>
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Başvuru Süreci Açıklaması */}
            <section style={{
                padding: '100px 20px',
                background: 'white'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            color: ikincil_renk,
                            marginBottom: '20px'
                        }}>
                            🚀 Başvuru Süreci
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Sadece 3 adımda programımıza katılın
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        position: 'relative'
                    }}>
                        {[
                            {
                                step: '01',
                                baslik: 'Formu Doldurun',
                                aciklama: 'Aşağıdaki başvuru formunu eksiksiz olarak doldurun. Tüm bilgilerinizi doğru girdiğinizden emin olun.',
                                icon: '📝',
                                color: '#e74c3c'
                            },
                            {
                                step: '02',
                                baslik: 'Değerlendirme',
                                aciklama: 'Başvurunuz uzman kadromuz tarafından 48 saat içinde değerlendirilir ve size bilgi verilir.',
                                icon: '🔍',
                                color: ana_renk
                            },
                            {
                                step: '03',
                                baslik: 'Programa Başlayın',
                                aciklama: 'Kabul edilmeniz durumunda program detayları ve başlangıç tarihi hakkında bilgilendirilirsiniz.',
                                icon: '🎯',
                                color: '#27ae60'
                            }
                        ].map((item, index) => (
                            <div key={index} style={{
                                textAlign: 'center',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {/* Step Number */}
                                <div style={{
                                    background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                                    color: 'white',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.8rem',
                                    fontWeight: '800',
                                    margin: '0 auto 20px',
                                    boxShadow: `0 10px 25px ${item.color}30`,
                                    position: 'relative'
                                }}>
                                    {item.step}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        fontSize: '2rem'
                                    }}>
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: ikincil_renk,
                                    marginBottom: '15px'
                                }}>
                                    {item.baslik}
                                </h3>
                                <p style={{
                                    color: '#666',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6'
                                }}>
                                    {item.aciklama}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Başvuru Formu Section - Yenilenmiş */}
            <section id="basvuru-formu" style={{
                background: `linear-gradient(135deg, ${ikincil_renk} 0%, ${ana_renk} 100%)`,
                padding: '100px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Arka plan efektleri */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(243, 156, 18, 0.1)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    animation: 'rotate 15s linear infinite'
                }}></div>

                <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    {/* Form Başlığı */}
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            color: 'white',
                            marginBottom: '20px',
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                        }}>
                            🎯 Başvuru Formu
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: 'rgba(255,255,255,0.9)',
                            maxWidth: '600px',
                            margin: '0 auto 30px',
                            lineHeight: '1.6'
                        }}>
                            Hayatınızı değiştirecek bu yolculuğa katılmak için formu doldurun
                        </p>
                        
                    </div>

                    {/* Form Container */}
                    <div style={{
                        background: 'white',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
                        position: 'relative'
                    }}>
                        

                        {/* Form İçeriği */}
                        <div style={{
                            padding: '50px 40px',
                            background: 'white'
                        }}>
                            

                            {/* Dynamics Marketing Embed - temiz konteynır */}
                            <div
                                data-form-id="0bc84e2b-a930-f011-8c4e-0022489aeafa"
                                data-form-api-url="https://public-eur.mkt.dynamics.com/api/v1.0/orgs/97c73e55-bfd3-ed11-aed0-000d3a64dc63/landingpageforms"
                                data-cached-form-url="https://assets-eur.mkt.dynamics.com/97c73e55-bfd3-ed11-aed0-000d3a64dc63/digitalassets/forms/0bc84e2b-a930-f011-8c4e-0022489aeafa"
                            />

                            {/* Form Alt Bilgi kaldırıldı: embed alanı temiz tutuluyor */}
                        </div>
                    </div>
                </div>
            </section>


            </div>
        );
}
