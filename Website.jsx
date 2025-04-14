import { useState } from "react";

export default function KirchbuehlWebsite() {
  const [lang, setLang] = useState("de");

  const text = {
    de: {
      title: "Willkommen bei der Kirchbühl Group",
      intro: "Digitale Lösungen für Schulen – iPads mit Bildungsrabatt, persönliche Beratung und zuverlässiger Service.",
      discover: "Jetzt Angebote entdecken",
      kontakt: "Kontakt",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      switchLang: "🇩🇪/🇬🇧",
      angebot: "Unsere iPad-Angebote",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        school: "Ihre Schule / Einrichtung",
        send: "Absenden"
      },
      imprint: "Impressum",
      privacy: "Datenschutzerklärung",
      company: "Kirchbühl Group • Kirchbühlstr. 6, 79677 Schönau im Schwarzwald • kirchbuehlgroup@gmail.com"
    },
    en: {
      title: "Welcome to Kirchbühl Group",
      intro: "Digital solutions for schools – iPads with educational discounts, personal support and reliable service.",
      discover: "Explore Offers Now",
      kontakt: "Contact",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
      switchLang: "🇬🇧/🇩🇪",
      angebot: "Our iPad Offers",
      form: {
        name: "Your Name",
        email: "Your Email",
        school: "Your School / Institution",
        send: "Send"
      },
      imprint: "Legal Notice",
      privacy: "Privacy Policy",
      company: "Kirchbühl Group • Kirchbühlstr. 6, 79677 Schönau, Germany • kirchbuehlgroup@gmail.com"
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="bg-white border-b border-black sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center"><img src="/logo.png" alt="Kirchbühl Logo" className="h-10 mr-3" /><span className="text-xl font-bold">Kirchbühl Group</span></div>
          <nav className="space-x-4 text-black text-sm font-medium">
            <a href="#kontakt" className="hover:underline">{text[lang].kontakt}</a>
            <a href="#impressum" className="hover:underline">{text[lang].impressum}</a>
            <a href="#datenschutz" className="hover:underline">{text[lang].datenschutz}</a>
            <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className="underline">
              {text[lang].switchLang}
            </button>
          </nav>
        </div>
      </header>

      {/* Landing Page */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-white text-black px-4">
        <h1 className="text-5xl font-bold mb-6">{text[lang].title}</h1>
        <p className="text-xl mb-8 max-w-xl">{text[lang].intro}</p>
        <a href="#angebote" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          {text[lang].discover}
        </a>
      </section>

      {/* Angebote */}
       id="angebote" className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">{text[lang].angebot}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xl font-semibold">iPad 11″ Wi-Fi (A16)</h3>
        <p><strong>Preis:</strong> ab 379,00 €</p>
        <p><strong>Lieferzeit:</strong> 5–14 Werktage</p>
        <p className="mt-2 text-sm text-black">Ideal für den Schulalltag mit starkem A16 Chip und großem Display – perfekt für Lern-Apps und Videokonferenzen.</p>
      </div>
      <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xl font-semibold">iPad 11″ Wi-Fi + Cellular (A16)</h3>
        <p><strong>Preis:</strong> ab 539,00 €</p>
        <p><strong>Lieferzeit:</strong> 5–14 Werktage</p>
        <p className="mt-2 text-sm text-black">Alle Vorteile des normalen iPads – plus mobiles Internet unterwegs. Optimal für flexibles Arbeiten und Reisen.</p>
      </div>
      <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xl font-semibold">iPad Pro 11″ M2 Wi-Fi</h3>
        <p><strong>Preis:</strong> ab 729,00 €</p>
        <p><strong>Lieferzeit:</strong> 5–14 Werktage</p>
        <p className="mt-2 text-sm text-black">Pro-Level Performance mit M2 Chip – ideal für Design, Multitasking und anspruchsvolle Bildungs-Apps.</p>
      </div>
      <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xl font-semibold">iPad 10,2″ Wi-Fi (9. Gen)</h3>
        <p><strong>Preis:</strong> ab 399,00 €</p>
        <p><strong>Lieferzeit:</strong> 5–14 Werktage</p>
        <p className="mt-2 text-sm text-black">Kompakter Klassiker – idealer Einstieg für Schüler*innen mit solidem Funktionsumfang.</p>
      </div>
      <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xl font-semibold">iPad Air 10,9″ (M1)</h3>
        <p><strong>Preis:</strong> ab 599,00 €</p>
        <p><strong>Lieferzeit:</strong> 5–14 Werktage</p>
        <p className="mt-2 text-sm text-black">Leicht und leistungsstark mit M1 Chip – perfekt für kreative Projekte und flüssiges Arbeiten.</p>
      </div>
      <div className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
        <h3 className="text-xl font-semibold">iPad mini 8,3″ (6. Gen)</h3>
        <p><strong>Preis:</strong> ab 559,00 €</p>
        <p><strong>Lieferzeit:</strong> 5–14 Werktage</p>
        <p className="mt-2 text-sm text-black">Ultrakompakt und mobil – für kleine Hände oder große Flexibilität unterwegs.</p>
      </div>
    </div>
  </div>
</section>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{text[lang].angebot}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "iPad 11″ Wi-Fi (A16)", price: "ab 379,00 €", delivery: "5–14 Werktage" },
              { name: "iPad 11″ Wi-Fi + Cellular (A16)", price: "ab 539,00 €", delivery: "5–14 Werktage" },
              { name: "iPad Pro 11″ M2 Wi-Fi", price: "ab 729,00 €", delivery: "5–14 Werktage" },
              { name: "iPad 10,2″ Wi-Fi (9. Gen)", price: "ab 399,00 €", delivery: "5–14 Werktage" },
              { name: "iPad Air 10,9″ (M1)", price: "ab 599,00 €", delivery: "5–14 Werktage" },
              { name: "iPad mini 8,3″ (6. Gen)", price: "ab 559,00 €", delivery: "5–14 Werktage" }
            ].map((ipad, i) => (
              <div key={i} className="border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
                <h3 className="text-xl font-semibold">{ipad.name}</h3>
                <p><strong>Preis:</strong> {ipad.price}</p>
                <p><strong>Lieferzeit:</strong> {ipad.delivery}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <section id="kontakt" className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">{text[lang].kontakt}</h2>
          <form className="space-y-4" action="https://formspree.io/f/xzzewerd" method="POST">
            <input name="name" placeholder={text[lang].form.name} className="w-full p-3 bg-gray-100 text-black border border-black rounded" />
            <input name="email" placeholder={text[lang].form.email} className="w-full p-3 bg-gray-100 text-black border border-black rounded" />
            <input name="school" placeholder={text[lang].form.school} className="w-full p-3 bg-gray-100 text-black border border-black rounded" />
            <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-gray-800 transition">{text[lang].form.send}</button>
          </form>
        </div>
      </section>

      {/* Impressum */}
      <section id="impressum" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-black">
          <h2 className="text-3xl font-bold mb-4">{text[lang].imprint}</h2>
          <p><strong>Kirchbühl Group</strong><br />
          Kirchbühlstraße 6<br />
          79677 Schönau im Schwarzwald<br />
          E-Mail: kirchbuehlgroup@gmail.com</p>
        </div>
      </section>

      {/* Datenschutz */}
      <section id="datenschutz" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-black">
          <h2 className="text-3xl font-bold mb-4">{text[lang].privacy}</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-black">
        {text[lang].company}
      </footer>
    </div>
  );
}