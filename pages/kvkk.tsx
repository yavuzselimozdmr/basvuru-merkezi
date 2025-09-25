import React from 'react';

export default function KVKKSayfasi() {
    return (
        <div style={{ 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}>
            {/* Header */}
            <section style={{
                background: 'linear-gradient(135deg, #08a4d4 0%, #0892c0 100%)',
                color: 'white',
                textAlign: 'center',
                padding: 'clamp(80px, 15vw, 120px) clamp(15px, 4vw, 20px) clamp(60px, 12vw, 80px)',
                marginTop: '70px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Arka plan şekilleri */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: 'clamp(100px, 20vw, 150px)',
                    height: 'clamp(100px, 20vw, 150px)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-80px',
                    left: '-80px',
                    width: 'clamp(120px, 25vw, 200px)',
                    height: 'clamp(120px, 25vw, 200px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite reverse'
                }}></div>

                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <h1 style={{
                        fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        fontWeight: '800',
                        letterSpacing: '-1px'
                    }}>
                        Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni
                    </h1>
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
                        opacity: '0.95',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        KVKK kapsamında kişisel verilerinizin nasıl işlendiği ve haklarınız hakkında detaylı bilgi
                    </p>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                `}</style>
            </section>

            {/* Ana İçerik */}
            <main style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: 'clamp(40px, 8vw, 60px) clamp(15px, 4vw, 20px)'
            }}>
                <div style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: 'clamp(30px, 6vw, 50px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(8, 164, 212, 0.1)',
                    lineHeight: '1.8'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                        color: '#08a4d4',
                        marginBottom: 'clamp(20px, 4vw, 30px)',
                        fontWeight: '700',
                        borderBottom: '3px solid #08a4d4',
                        paddingBottom: '15px'
                    }}>
                        1. Veri Sorumlusunun Kimliği
                    </h2>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(30px, 6vw, 40px)',
                        textAlign: 'justify'
                    }}>
                        Kişisel verileriniz, veri sorumlusu sıfatıyla Türkiye Gençlik Vakfı (bundan böyle &quot;TÜGVA&quot; veya &quot;Vakıf&quot; olarak anılacaktır) tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;Kanun&quot;) uyarınca aşağıda açıklanan kapsamda işlenebilecektir.
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                        color: '#08a4d4',
                        marginBottom: 'clamp(20px, 4vw, 25px)',
                        fontWeight: '700',
                        borderBottom: '3px solid #08a4d4',
                        paddingBottom: '15px'
                    }}>
                        2. Kişisel Verilerinizin İşlenme Amacı
                    </h2>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        textAlign: 'justify'
                    }}>
                        Toplanan kişisel verileriniz, Kanun&apos;da belirtilen temel ilkelere uygun olarak, 5. ve 6. maddelerde yer alan işleme şartları çerçevesinde, TÜGVA tarafından aşağıdaki amaçlarla işlenebilir:
                    </p>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(30px, 6vw, 40px)',
                        paddingLeft: 'clamp(15px, 3vw, 20px)',
                        textAlign: 'justify'
                    }}>
                        Sponsorlara raporlama yapmak; Vakıf faaliyetleri hakkında bilgilendirme yapmak; Tanıtım ve eğitim amacıyla davette bulunmak; Faaliyetlerin duyurulması; Konaklama ve güvenliğin sağlanması; Sosyal medyada öğrenci hikâyeleri paylaşmak; Bilimsel araştırma ve tez çalışmaları gibi alanlarda isteğe bağlı yardım amacıyla yönlendirme yapmak; Yasal yükümlülüklerin ve idari kurumların taleplerinin yerine getirilmesi; Yeterlilik ve güvenlik değerlendirmesi yapılması; TÜGVA&apos;nın toplumsal etkisinin ölçülmesi.
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                        color: '#08a4d4',
                        marginBottom: 'clamp(20px, 4vw, 25px)',
                        fontWeight: '700',
                        borderBottom: '3px solid #08a4d4',
                        paddingBottom: '15px'
                    }}>
                        3. Kişisel Verilerinizin Aktarıldığı Taraflar
                    </h2>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        textAlign: 'justify'
                    }}>
                        Kişisel verileriniz, Kanun&apos;un 8. ve 9. maddeleri doğrultusunda, aşağıdaki kişi ve kuruluşlara aktarılabilir:
                    </p>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        paddingLeft: 'clamp(15px, 3vw, 20px)',
                        textAlign: 'justify'
                    }}>
                        Yurtiçi/yurtdışı depolama ve arşiv hizmeti sağlayıcıları; Bilişim teknolojileri (hosting, bulut, e-posta vb.) hizmet sağlayıcıları; Sigorta, konaklama ve danışmanlık firmaları; SMS, e-posta ve CRM sistem desteği gibi hizmet sağlayan üçüncü taraflar; İş ortakları ve yetkili kamu kurum ve kuruluşları.
                    </p>
                    
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
                        color: '#08a4d4',
                        fontWeight: '600',
                        fontStyle: 'italic',
                        marginBottom: 'clamp(30px, 6vw, 40px)',
                        textAlign: 'center',
                        background: '#e8f4f8',
                        padding: 'clamp(12px, 3vw, 15px)',
                        borderRadius: '10px'
                    }}>
                        Bu aktarım, yalnızca ilgili amaçların gerektirdiği ölçüde yapılmaktadır.
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                        color: '#08a4d4',
                        marginBottom: 'clamp(20px, 4vw, 25px)',
                        fontWeight: '700',
                        borderBottom: '3px solid #08a4d4',
                        paddingBottom: '15px'
                    }}>
                        4. Toplama Yöntemi ve Hukuki Sebebi
                    </h2>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        textAlign: 'justify'
                    }}>
                        Kişisel verileriniz, TÜGVA ile olan ilişkiniz kapsamında, otomatik ya da otomatik olmayan yöntemlerle; sözlü, yazılı ya da elektronik yollarla aşağıdaki yöntemler aracılığıyla toplanmaktadır:
                    </p>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        paddingLeft: 'clamp(15px, 3vw, 20px)',
                        textAlign: 'justify'
                    }}>
                        Üniversitelerde ve kamusal alanlarda açılan stantlarda kurulan iletişim; TÜGVA&apos;nın resmi web sitesinden yapılan online başvurular; Web sitesi çerezleri (cookie) aracılığıyla yapılan ziyaretler; Sosyal medya ve arama motorları (Google vb.) üzerinden gelen veriler; Gönüllü adayı bilgi formları ve gönüllü taahhütnameleri.
                    </p>
                    
                    <p style={{
                        fontSize: 'clamp(0.95rem, 2.1vw, 1.05rem)',
                        color: '#08a4d4',
                        fontWeight: '600',
                        fontStyle: 'italic',
                        marginBottom: 'clamp(30px, 6vw, 40px)',
                        textAlign: 'center',
                        background: '#e8f4f8',
                        padding: 'clamp(12px, 3vw, 15px)',
                        borderRadius: '10px'
                    }}>
                        Toplanan veriler, Kanun&apos;un 5. ve 6. maddelerine uygun olarak işlenmektedir.
                    </p>

                    <h2 style={{
                        fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                        color: '#08a4d4',
                        marginBottom: 'clamp(20px, 4vw, 25px)',
                        fontWeight: '700',
                        borderBottom: '3px solid #08a4d4',
                        paddingBottom: '15px'
                    }}>
                        5. Haklarınız
                    </h2>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        marginBottom: 'clamp(15px, 3vw, 20px)',
                        textAlign: 'justify'
                    }}>
                        KVKK&apos;nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:
                    </p>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                        color: '#555',
                        textAlign: 'justify',
                        paddingLeft: 'clamp(15px, 3vw, 20px)'
                    }}>
                        Kişisel verilerinizin işlenip işlenmediğini öğrenme; Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme; Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme; Verilerin aktarıldığı üçüncü kişileri bilme (yurt içi/yurt dışı); Eksik veya yanlış işlenen verilerin düzeltilmesini isteme; Verilerin silinmesini veya yok edilmesini talep etme; Düzeltme/silme işlemlerinin üçüncü kişilere bildirilmesini isteme; İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhinize çıkan sonuçlara itiraz etme; Kişisel verilerin hukuka aykırı işlenmesi sebebiyle zarara uğramanız hâlinde tazminat talep etme.
                    </p>
                </div>
            </main>
        </div>
    );
}