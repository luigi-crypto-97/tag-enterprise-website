# TAG Enterprise Solution Corp - Enterprise Website

Sito web **enterprise-grade** per TAG Enterprise Solution Corp, azienda di sviluppo software e soluzioni AI con sede a Miami, Florida.

## Caratteristiche Enterprise

### 🌐 Internazionalizzazione (i18n)
- **Supporto bilingue**: Italiano / Inglese
- **Switch lingua**: Toggle in alto a destra nella top bar
- **Persistenza**: La preferenza lingua viene salvata in localStorage
- **Traduzioni complete**: Tutti i contenuti del sito sono tradotti

### 🎨 Design System
- **Colori**: Palette enterprise con variabili CSS semantiche
- **Tipografia**: Inter (body) + Manrope (headings)
- **Ombre**: Sistema di shadow elevation coerente
- **Spacing**: Scala di spaziatura proporzionale
- **Responsive**: Mobile-first con breakpoint a 480px, 768px, 1024px, 1200px

### ⚡ Animazioni
- **Hero network**: Visualizzazione dinamica di nodi connessi
- **Counter animation**: Numeri che contano up con easing
- **Scroll animations**: Elementi che appaiono allo scroll
- **Floating cards**: Effetto parallasse sulle card
- **Smooth scroll**: Navigazione fluida tra sezioni

### ♿ Accessibilità
- Supporto `prefers-reduced-motion`
- Focus states visibili
- Attributi ARIA
- Supporto tastiera (ESC per chiudere menu mobile)

## Struttura del Progetto

```
tag-enterprise-website/
├── index.html          # Struttura HTML semantica
├── styles.css          # Design system completo (1200+ righe)
├── script.js           # JavaScript modulare con i18n
└── README.md           # Documentazione
```

## Sezioni del Sito

1. **Top Bar** - Info contatti + language switcher
2. **Navigation** - Menu fisso con backdrop blur
3. **Hero** - Animazione network + dashboard fittizia + floating cards
4. **Logos** - Social proof con clienti enterprise
5. **Problem & Solution** - 3 pain points + banner soluzione
6. **Services** - 4 card servizi con feature dettagliate
7. **Why Us** - USP aziendali + statistiche + certificazioni
8. **Case Studies** - 3 casi studio settoriali con metriche
9. **Insights** - 3 articoli thought leadership
10. **CTA Section** - Contatti diretti con info dettagliate
11. **Footer** - Link rapidi, social, legale

## Come Visualizzare

### Apertura Diretta
```bash
cd tag-enterprise-website
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

### Server Locale (Consigliato)
```bash
# Python 3
python3 -m http.server 8000

# Node.js (serve)
npx serve

# Node.js (http-server)
npx http-server -p 8000

# Poi apri http://localhost:8000
```

## Personalizzazione

### Cambiare i Contatti
Cerca `#contact` in `index.html` e aggiorna:
- Email: `enterprise@tagcorp.com`
- Telefono: `+1 (305) 555-0123`
- Indirizzo: `1450 Brickell Ave, Suite 1900, Miami, FL 33131`

### Modificare le Traduzioni
In `script.js`, oggetto `i18n.translations`:
```javascript
it: {
    'hero.title.line1': 'Il tuo testo italiano',
    // ...
},
en: {
    'hero.title.line1': 'Your English text',
    // ...
}
```

### Cambiare i Colori
In `styles.css`, sezione `:root`:
```css
--primary-600: #2563eb;     /* Colore principale */
--primary-700: #1d4ed8;     /* Hover state */
--slate-900: #0f172a;       /* Dark background */
```

### Aggiungere Lingue
1. Aggiungi il blocco traduzioni in `script.js`:
```javascript
fr: {
    'hero.title.line1': 'Votre texte français',
    // ...
}
```
2. Aggiungi il bottone nella top bar:
```html
<button class="lang-btn" data-lang="fr">FR</button>
```

## Performance

- **Nessuna dipendenza esterna** (vanilla JS)
- **Google Fonts** con preconnect
- **CSS variables** per theming efficiente
- **IntersectionObserver** per animazioni on-demand
- **RequestAnimationFrame** per animazioni fluide

## Browser Support

| Browser | Versione |
|---------|----------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## SEO

- Meta tag descrittivi
- Struttura semantica HTML5
- Heading hierarchy (H1 → H6)
- Attributi alt e aria
- Open Ready (condivisibile sui social)

## Licenza

© 2026 TAG Enterprise Solution Corp. Tutti i diritti riservati.

---

**Sviluppato per TAG Enterprise Solution Corp** | Miami, Florida
