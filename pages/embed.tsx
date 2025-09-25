import { useEffect, useRef } from 'react';

// TypeScript için window objesine MsCrmFormLoader tipini ekliyoruz
declare global {
    interface Window {
        MsCrmFormLoader: {
            load: () => void;
        };
    }
}

export default function Yurt() {
    const formContainerRef = useRef(null);

    useEffect(() => {
        // Script'i yükle veya varsa sadece formu başlat
        const existingScript = document.querySelector('script[src*="FormLoader.bundle.js"]');
        
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
            script.async = true;
            script.onload = () => {
                initializeForm();
            };
            document.body.appendChild(script);
        } else {
            // Script zaten yüklü, formu başlat
            initializeForm();
        }

        function initializeForm() {
            if (formContainerRef.current && window.MsCrmFormLoader) {
                // Container'ı temizle
                formContainerRef.current.innerHTML = '';
                
                // Data attribute'ları yeniden ayarla
                formContainerRef.current.setAttribute('data-form-id', '0bc84e2b-a930-f011-8c4e-0022489aeafa');
                formContainerRef.current.setAttribute('data-form-api-url', 'https://public-eur.mkt.dynamics.com/api/v1.0/orgs/97c73e55-bfd3-ed11-aed0-000d3a64dc63/landingpageforms');
                formContainerRef.current.setAttribute('data-cached-form-url', 'https://assets-eur.mkt.dynamics.com/97c73e55-bfd3-ed11-aed0-000d3a64dc63/digitalassets/forms/0bc84e2b-a930-f011-8c4e-0022489aeafa');
                
                // Formu yükle
                window.MsCrmFormLoader.load();
            }
        }
    }, []);

    return (
        <>
            <style jsx>{`
                /* Minimal lookup dropdown düzeltmeleri */
                div[data-form-id] :global([data-role="listbox"]),
                div[data-form-id] :global([role="listbox"]),
                div[data-form-id] :global(.ms-crm-lookup-menu) {
                    position: absolute !important;
                    z-index: 9999 !important;
                    background: white !important;
                    border: 1px solid #ccc !important;
                    max-height: 200px !important;
                    overflow-y: auto !important;
                }

                /* Sadece gerekli yerlerde overflow visible */
                div[data-form-id] :global([data-role="combobox"]),
                div[data-form-id] :global([role="combobox"]) {
                    overflow: visible !important;
                }
            `}</style>

            {/* HERO kısmı */}
            <section className="hero" id="anasayfa">
                <div className="hero-content">
                    <h1>Yeni Başlangıçların Adresi: TÜGVA Yurtları</h1>
                    <p>
                        Eğitim hayatını sadece derslerle değil; kültürel, sosyal ve manevi yönden de destekliyoruz.
                        TÜGVA yurtlarında seni geleceğe hazırlayacak bir ortam bekliyor.
                    </p>
                    <a href="#iletisim" className="cta-button">Hemen Başvur</a>
                </div>
            </section>

            {/* Main Content */}
            <main className="main-content">
                {/* Başvuru Formu Section */}
                <section className="section" id="iletisim">
                    <h2>Başvuru Formu</h2>
                    <p>
                        Eğitim yolculuğunuzda size eşlik edecek güvenli ve konforlu bir yurt ortamı için başvurunuzu hemen şimdi gerçekleştirin.
                        Aşağıdaki formu doldurmanız yeterli. Başvurular özenle değerlendirilecek, ekibimiz sizinle en kısa sürede iletişime geçecektir.
                    </p>

                    {/* Form Embed - Ref ve teknik düzeltmelerle */}
                    <div
                        ref={formContainerRef}
                        data-form-id='0bc84e2b-a930-f011-8c4e-0022489aeafa'
                        data-form-api-url='https://public-eur.mkt.dynamics.com/api/v1.0/orgs/97c73e55-bfd3-ed11-aed0-000d3a64dc63/landingpageforms'
                        data-cached-form-url='https://assets-eur.mkt.dynamics.com/97c73e55-bfd3-ed11-aed0-000d3a64dc63/digitalassets/forms/0bc84e2b-a930-f011-8c4e-0022489aeafa'
                    ></div>
                </section>
            </main>
        </>
    );
}