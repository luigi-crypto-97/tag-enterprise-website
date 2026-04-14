# TAG Enterprise Website - Guida al Deployment

## Checklist Pre-Deployment

### 1. Configurazione Google Analytics

1. **Crea un account Google Analytics 4** su [analytics.google.com](https://analytics.google.com)
2. **Crea una proprietà** per TAG Enterprise Solution Corp
3. **Ottieni il Measurement ID** (formato: `G-XXXXXXXXXX`)
4. **Aggiorna `index.html`**: Sostituisci `G-XXXXXXXXXX` con il tuo ID reale

```html
<!-- In index.html, cerca e sostituisci -->
gtag('config', 'G-XXXXXXXXXX', {
```

### 2. Crea Open Graph Image

1. **Apri `og-image.html`** nel browser
2. **Fai uno screenshot** della pagina (Cmd+Shift+4 su Mac)
3. **Salva come `og-image.jpg`** nella root del sito
4. **Verifica** che le dimensioni siano 1200x630px

### 3. Aggiorna i Metadati

Modifica `index.html` con il dominio reale:

```html
<meta property="og:url" content="https://www.tagenterprise.com/">
<meta property="og:image" content="https://www.tagenterprise.com/og-image.jpg">
<link rel="canonical" href="https://www.tagenterprise.com/">
```

### 4. Configura il Dominio

**Opzione A: Hosting Statico (Consigliato)**

| Provider | Piano | Costo |
|----------|-------|-------|
| Vercel | Pro | $20/mese |
| Netlify | Pro | $19/mese |
| Cloudflare Pages | Pro | $5/mese |

**Opzione B: Server Tradizionale**
- Carica i file via FTP/SFTP
- Configura HTTPS con Let's Encrypt

### 5. Submit a Google Search Console

1. **Verifica la proprietà** su [search.google.com/search-console](https://search.google.com/search-console)
2. **Submit della sitemap**:
   - Vai su "Sitemap"
   - Inserisci `sitemap.xml`
   - Clicca "Invia"

### 6. Configura robots.txt

Il file `robots.txt` è già pronto. Assicurati che sia accessibile a:
```
https://www.tagenterprise.com/robots.txt
```

---

## Struttura File Finale

```
tag-enterprise-website/
├── index.html          # Pagina principale (aggiorna GA4 ID)
├── styles.css          # Tutti gli stili (1200+ righe)
├── script.js           # JavaScript + i18n (600+ righe)
├── sitemap.xml         # Sitemap per SEO
├── robots.txt          # Regole per crawler
├── og-image.html       # Template per social image
├── og-image.jpg        # (DA CREARE - immagine 1200x630)
└── README.md           # Documentazione
```

---

## Prodotti TAG Enterprise

### Iron Quote
- **URL**: [https://app.iron-quote.it](https://app.iron-quote.it)
- **Descrizione**: Gestionale per preventivi e ordini
- **Target**: Aziende commerciali, distributori

### Lex Manage
- **URL**: [https://app.lexmanage.it](https://app.lexmanage.it)
- **Descrizione**: Gestionale per compliance e documenti
- **Target**: Studi legali, aziende regolamentate

---

## SEO Checklist

- [ ] Google Analytics configurato
- [ ] Google Search Console verificato
- [ ] Sitemap submit
- [ ] robots.txt accessibile
- [ ] Open Graph image creata
- [ ] Meta tag aggiornati con dominio reale
- [ ] HTTPS attivo
- [ ] Canonical URL impostata

---

## Performance Targets

| Metrica | Target | Strumento |
|---------|--------|-----------|
| LCP | < 2.5s | PageSpeed Insights |
| FID | < 100ms | PageSpeed Insights |
| CLS | < 0.1 | PageSpeed Insights |
| Performance Score | > 90 | Lighthouse |

---

## Monitoraggio Post-Deployment

### Google Analytics Events (Automatici)
- `page_view` - Ogni visita alla pagina
- `language_change` - Cambio lingua (IT/EN)
- `cta_click` - Click su bottoni CTA

### Report Settimanali
1. **Traffic Sources** - Da dove vengono i visitatori
2. **Top Pages** - Quali sezioni sono più viste
3. **Conversion Rate** - Click su "Contatti" / Visite totali

---

## Supporto Tecnico

### Problemi Comuni

**Il sito non si vede su mobile**
- Verifica che il viewport meta tag sia presente
- Controlla i media queries CSS

**Google Analytics non traccia**
- Assicurati che l'ID sia corretto
- Verifica che non ci siano AdBlock attivi durante il test

**La sitemap dà errore**
- Controlla che l'URL del dominio sia corretto
- Verifica che il file sia accessibile via browser

---

## Contatti Utili

- **Google Analytics Support**: [support.google.com/analytics](https://support.google.com/analytics)
- **Google Search Console Help**: [support.google.com/webmasters](https://support.google.com/webmasters)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)

---

**TAG Enterprise Solution Corp** © 2026
*Miami, Florida | www.tagenterprise.com*
