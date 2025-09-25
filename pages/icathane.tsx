import { useEffect } from 'react';

export default function Yurt() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js';
        script.async = true;
        document.body.appendChild(script);

        // Smooth scroll için click handler
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };

        // Tüm iç linkler için smooth scroll ekle
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Cleanup function
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return (
        <>
            {/* HERO kısmı */}
            <section className="hero" id="anasayfa">
                <div className="hero-content">
                    <h1>Başımıza İcat Çıkartan Gençler: İcathane</h1>
                    <p>
                        Ortaokul, lise ve üniversiteli! Türkiye’nin dört bir yanında gençler için teknoloji atölyeleri!
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
                        Aşağıdaki formu doldurmanız yeterli. Başvurular özenle değerlendirilecek, ekibimiz sizinle en kısa sürede iletişime geçecektir.
                    </p>

                    {/* Form Embed */}
                    <div
                        data-form-id='7db94cd6-e163-f011-bec2-7ced8d2d8a4e'
                        data-form-api-url='https://public-eur.mkt.dynamics.com/api/v1.0/orgs/97c73e55-bfd3-ed11-aed0-000d3a64dc63/landingpageforms'
                        data-cached-form-url='https://assets-eur.mkt.dynamics.com/97c73e55-bfd3-ed11-aed0-000d3a64dc63/digitalassets/forms/7db94cd6-e163-f011-bec2-7ced8d2d8a4e'
                    ></div>
                </section>
            </main>
        </>
    );
}