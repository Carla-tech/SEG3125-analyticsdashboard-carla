import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const exchangeRates = {
  CAD: 1,
  EUR: 0.67
};

const translations = {
  en: {
    languageName: 'English',
    appTitle: 'Belle & Bloom Analytics',
    courseTag: 'SEG3125 Assignment 5 - Bilingual Interactive Dashboard',
    heroTitle: 'A clear dashboard for understanding synthetic e-commerce performance.',
    heroText: 'This prototype visualizes Belle & Bloom clothing and beauty sales with two interactive charts, bilingual text, localized formats, and dashboard controls.',
    dataNoticeTitle: 'Synthetic data notice',
    dataNotice: 'The numbers in this dashboard are synthetic data created for the assignment. They are not real company sales.',
    lineChartTitle: 'Monthly revenue trend',
    lineChartContext: 'Use this line chart to understand how revenue changes over time for all products, clothing, or beauty products.',
    barChartTitle: 'Top product performance',
    barChartContext: 'Use this bar chart to compare product performance and quickly identify which products sell the most.',
    category: 'Category',
    metric: 'Metric',
    currency: 'Currency',
    sortBy: 'Sort by',
    language: 'Language',
    all: 'All products',
    clothing: 'Clothing',
    beauty: 'Beauty',
    revenue: 'Revenue',
    units: 'Units sold',
    orders: 'Orders',
    avgOrder: 'Average order value',
    conversion: 'Conversion rate',
    satisfaction: 'Survey satisfaction',
    totalRevenue: 'Total revenue',
    totalUnits: 'Total units sold',
    bestMonth: 'Best month',
    topProduct: 'Top product',
    chartSummary: 'Chart summary',
    accessibilityTable: 'Accessible data table',
    month: 'Month',
    value: 'Value',
    product: 'Product',
    productType: 'Type',
    clearFilters: 'Reset dashboard',
    designNotes: 'Design notes',
    designNotesText: 'The dashboard applies the 3Cs: context through short explanations, clutter-free charts through simplified axes and labels, and contrast through highlighted cards and focused chart colors.',
    localizationNotes: 'Localization notes',
    localizationNotesText: 'The language selector changes interface labels, chart labels, month names, currency formatting, and number formatting. French text is longer, so the layout uses flexible spacing.',
    contact: 'Contact',
    contactText: 'For questions about this prototype, contact:',
    footer: 'Built with React, SVG charts, and localized interface text.',
    jan: 'Jan', feb: 'Feb', mar: 'Mar', apr: 'Apr', may: 'May', jun: 'Jun', jul: 'Jul', aug: 'Aug',
    blushDress: 'Blush Satin Wrap Dress',
    knitTop: 'Everyday Ribbed Knit Top',
    lipOil: 'Rose Glow Lip Oil',
    widePants: 'Soft Tailored Wide-Leg Pants',
    skinTint: 'Dewy Skin Tint',
    bodyMist: 'Vanilla Cloud Body Mist',
    cardigan: 'Pearl Button Cardigan',
    blush: 'Berry Velvet Blush',
    skirt: 'Classic A-Line Skirt',
    browGel: 'Clear Brow Styling Gel',
    denimDress: 'Weekend Denim Dress',
    hairMask: 'Repair Shine Hair Mask',
    dresses: 'Dresses', tops: 'Tops', lips: 'Lips', bottoms: 'Bottoms', face: 'Face', fragrance: 'Fragrance', knitwear: 'Knitwear', brows: 'Brows', hair: 'Hair'
  },
  fr: {
    languageName: 'Français',
    appTitle: 'Analytique Belle & Bloom',
    courseTag: 'SEG3125 Devoir 5 - Tableau de bord interactif bilingue',
    heroTitle: 'Un tableau de bord clair pour comprendre la performance e-commerce synthétique.',
    heroText: 'Ce prototype visualise les ventes de vêtements et de produits de beauté Belle & Bloom avec deux graphiques interactifs, du texte bilingue, des formats localisés et des contrôles de tableau de bord.',
    dataNoticeTitle: 'Avis sur les données synthétiques',
    dataNotice: 'Les chiffres de ce tableau de bord sont des données synthétiques créées pour le devoir. Ils ne représentent pas de vraies ventes d’entreprise.',
    lineChartTitle: 'Tendance mensuelle des revenus',
    lineChartContext: 'Utilisez ce graphique linéaire pour comprendre comment les revenus changent au fil du temps pour tous les produits, les vêtements ou les produits de beauté.',
    barChartTitle: 'Performance des meilleurs produits',
    barChartContext: 'Utilisez ce graphique à barres pour comparer la performance des produits et repérer rapidement les produits les plus vendus.',
    category: 'Catégorie',
    metric: 'Mesure',
    currency: 'Devise',
    sortBy: 'Trier par',
    language: 'Langue',
    all: 'Tous les produits',
    clothing: 'Vêtements',
    beauty: 'Beauté',
    revenue: 'Revenus',
    units: 'Unités vendues',
    orders: 'Commandes',
    avgOrder: 'Panier moyen',
    conversion: 'Taux de conversion',
    satisfaction: 'Satisfaction du sondage',
    totalRevenue: 'Revenus totaux',
    totalUnits: 'Unités totales vendues',
    bestMonth: 'Meilleur mois',
    topProduct: 'Meilleur produit',
    chartSummary: 'Résumé du graphique',
    accessibilityTable: 'Tableau de données accessible',
    month: 'Mois',
    value: 'Valeur',
    product: 'Produit',
    productType: 'Type',
    clearFilters: 'Réinitialiser le tableau de bord',
    designNotes: 'Notes de conception',
    designNotesText: 'Le tableau de bord applique les 3C : contexte grâce à de courtes explications, graphiques sans encombrement grâce à des axes et étiquettes simplifiés, et contraste grâce aux cartes mises en évidence et aux couleurs ciblées.',
    localizationNotes: 'Notes de localisation',
    localizationNotesText: 'Le sélecteur de langue change les libellés de l’interface, les libellés des graphiques, les noms des mois, le format de la devise et le format des nombres. Le texte français est plus long, donc la mise en page utilise un espacement flexible.',
    contact: 'Contact',
    contactText: 'Pour toute question sur ce prototype, contactez :',
    footer: 'Créé avec React, des graphiques SVG et du texte d’interface localisé.',
    jan: 'Janv.', feb: 'Févr.', mar: 'Mars', apr: 'Avr.', may: 'Mai', jun: 'Juin', jul: 'Juil.', aug: 'Août',
    blushDress: 'Robe portefeuille satin rose',
    knitTop: 'Haut côtelé quotidien',
    lipOil: 'Huile à lèvres éclat rose',
    widePants: 'Pantalon large tailleur doux',
    skinTint: 'Teint léger effet lumineux',
    bodyMist: 'Brume corporelle vanille nuage',
    cardigan: 'Cardigan à boutons perlés',
    blush: 'Fard à joues velours baies',
    skirt: 'Jupe trapèze classique',
    browGel: 'Gel coiffant transparent pour sourcils',
    denimDress: 'Robe en denim weekend',
    hairMask: 'Masque cheveux réparation brillance',
    dresses: 'Robes', tops: 'Hauts', lips: 'Lèvres', bottoms: 'Bas', face: 'Teint', fragrance: 'Parfum', knitwear: 'Tricot', brows: 'Sourcils', hair: 'Cheveux'
  }
};

const monthlyData = [
  { month: 'jan', clothing: 12800, beauty: 7600, orders: 338, satisfaction: 4.1 },
  { month: 'feb', clothing: 14200, beauty: 8300, orders: 372, satisfaction: 4.2 },
  { month: 'mar', clothing: 15300, beauty: 9100, orders: 401, satisfaction: 4.3 },
  { month: 'apr', clothing: 17100, beauty: 10400, orders: 455, satisfaction: 4.4 },
  { month: 'may', clothing: 18900, beauty: 12100, orders: 514, satisfaction: 4.5 },
  { month: 'jun', clothing: 20600, beauty: 13400, orders: 562, satisfaction: 4.6 }
];

const products = [
  { id: 'blushDress', type: 'dresses', category: 'clothing', units: 224, revenue: 15232 },
  { id: 'knitTop', type: 'tops', category: 'clothing', units: 316, revenue: 10744 },
  { id: 'lipOil', type: 'lips', category: 'beauty', units: 438, revenue: 7884 },
  { id: 'widePants', type: 'bottoms', category: 'clothing', units: 181, revenue: 14480 },
  { id: 'skinTint', type: 'face', category: 'beauty', units: 273, revenue: 10920 },
  { id: 'bodyMist', type: 'fragrance', category: 'beauty', units: 247, revenue: 7410 },
  { id: 'cardigan', type: 'knitwear', category: 'clothing', units: 154, revenue: 12936 },
  { id: 'blush', type: 'face', category: 'beauty', units: 361, revenue: 8664 },
  { id: 'skirt', type: 'bottoms', category: 'clothing', units: 207, revenue: 11592 },
  { id: 'browGel', type: 'brows', category: 'beauty', units: 331, revenue: 5958 },
  { id: 'denimDress', type: 'dresses', category: 'clothing', units: 136, revenue: 12240 },
  { id: 'hairMask', type: 'hair', category: 'beauty', units: 198, revenue: 6732 }
];

function formatCurrency(value, currency, language) {
  const locale = language === 'fr' ? 'fr-CA' : 'en-CA';
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(value * exchangeRates[currency]);
}

function formatNumber(value, language) {
  const locale = language === 'fr' ? 'fr-CA' : 'en-CA';
  return new Intl.NumberFormat(locale).format(value);
}

function SelectControl({ label, value, onChange, children }) {
  return (
    <label className="control">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {children}
      </select>
    </label>
  );
}

function KPI({ label, value, helper }) {
  return (
    <article className="kpi-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{helper}</small>
    </article>
  );
}

function LineChart({ data, language, currency, title, yLabel }) {
  const width = 720;
  const height = 330;
  const padding = { top: 34, right: 36, bottom: 54, left: 78 };
  const values = data.map((item) => item.value * exchangeRates[currency]);
  const max = Math.max(...values) * 1.12;
  const min = 0;
  const xStep = (width - padding.left - padding.right) / Math.max(data.length - 1, 1);
  const yScale = (value) => height - padding.bottom - ((value - min) / (max - min)) * (height - padding.top - padding.bottom);
  const points = data.map((item, index) => ({
    x: padding.left + index * xStep,
    y: yScale(item.value * exchangeRates[currency]),
    ...item
  }));
  const path = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  const grid = [0, 0.25, 0.5, 0.75, 1].map((ratio) => max * ratio);

  return (
    <figure className="chart-figure" aria-labelledby="line-title">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title}>
        <title id="line-title">{title}</title>
        <desc>{yLabel}</desc>
        {grid.map((tick) => {
          const y = yScale(tick);
          return (
            <g key={tick} className="chart-grid">
              <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} />
              <text x={padding.left - 12} y={y + 4} textAnchor="end">
                {formatCurrency(tick / exchangeRates[currency], currency, language).replace(/\.00$/, '')}
              </text>
            </g>
          );
        })}
        <line className="axis" x1={padding.left} x2={width - padding.right} y1={height - padding.bottom} y2={height - padding.bottom} />
        <line className="axis" x1={padding.left} x2={padding.left} y1={padding.top} y2={height - padding.bottom} />
        <path d={path} className="line-path" />
        {points.map((point) => (
          <g key={point.month} className="data-point">
            <circle cx={point.x} cy={point.y} r="6" />
            <text x={point.x} y={height - 18} textAnchor="middle">{point.label}</text>
            <text x={point.x} y={point.y - 12} textAnchor="middle" className="point-label">
              {formatCurrency(point.value, currency, language)}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

function BarChart({ data, language, currency, metric, title }) {
  const width = 720;
  const height = 330;
  const padding = { top: 34, right: 30, bottom: 76, left: 74 };
  const values = data.map((item) => metric === 'revenue' ? item.revenue * exchangeRates[currency] : item.units);
  const max = Math.max(...values) * 1.15;
  const barWidth = (width - padding.left - padding.right) / data.length - 18;
  const yScale = (value) => height - padding.bottom - (value / max) * (height - padding.top - padding.bottom);
  const grid = [0, 0.25, 0.5, 0.75, 1].map((ratio) => max * ratio);

  return (
    <figure className="chart-figure" aria-labelledby="bar-title">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title}>
        <title id="bar-title">{title}</title>
        {grid.map((tick) => {
          const y = yScale(tick);
          const label = metric === 'revenue' ? formatCurrency(tick / exchangeRates[currency], currency, language) : formatNumber(Math.round(tick), language);
          return (
            <g key={tick} className="chart-grid">
              <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} />
              <text x={padding.left - 12} y={y + 4} textAnchor="end">{label}</text>
            </g>
          );
        })}
        <line className="axis" x1={padding.left} x2={width - padding.right} y1={height - padding.bottom} y2={height - padding.bottom} />
        <line className="axis" x1={padding.left} x2={padding.left} y1={padding.top} y2={height - padding.bottom} />
        {data.map((item, index) => {
          const rawValue = metric === 'revenue' ? item.revenue : item.units;
          const scaledValue = metric === 'revenue' ? item.revenue * exchangeRates[currency] : item.units;
          const x = padding.left + index * (barWidth + 18) + 10;
          const y = yScale(scaledValue);
          const barHeight = height - padding.bottom - y;
          return (
            <g key={item.id} className="bar-group">
              <rect x={x} y={y} width={barWidth} height={barHeight} rx="10" />
              <text x={x + barWidth / 2} y={y - 10} textAnchor="middle" className="point-label">
                {metric === 'revenue' ? formatCurrency(rawValue, currency, language) : formatNumber(rawValue, language)}
              </text>
              <text x={x + barWidth / 2} y={height - 42} textAnchor="middle" className="bar-label">
                {item.shortLabel}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

function DataTable({ caption, headers, rows }) {
  return (
    <details className="data-table-wrap">
      <summary>{caption}</summary>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

function App() {
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('CAD');
  const [lineCategory, setLineCategory] = useState('all');
  const [barCategory, setBarCategory] = useState('all');
  const [barMetric, setBarMetric] = useState('units');
  const t = translations[language];

  const monthlySeries = useMemo(() => monthlyData.map((item) => {
    const value = lineCategory === 'all' ? item.clothing + item.beauty : item[lineCategory];
    return { month: item.month, label: t[item.month], value };
  }), [lineCategory, t]);

  const visibleProducts = useMemo(() => {
    return products
      .filter((product) => barCategory === 'all' || product.category === barCategory)
      .map((product) => ({
        ...product,
        label: t[product.id],
        shortLabel: t[product.id].split(' ').slice(0, 2).join(' '),
        typeLabel: t[product.type],
        categoryLabel: t[product.category]
      }))
      .sort((a, b) => (barMetric === 'revenue' ? b.revenue - a.revenue : b.units - a.units))
      .slice(0, 6);
  }, [barCategory, barMetric, t]);

  const totals = useMemo(() => {
    const totalRevenue = monthlyData.reduce((sum, item) => sum + item.clothing + item.beauty, 0);
    const totalUnits = products.reduce((sum, product) => sum + product.units, 0);
    const best = monthlyData.reduce((bestMonth, item) => (item.clothing + item.beauty) > (bestMonth.clothing + bestMonth.beauty) ? item : bestMonth, monthlyData[0]);
    const top = products.reduce((winner, product) => product.units > winner.units ? product : winner, products[0]);
    return { totalRevenue, totalUnits, best, top };
  }, []);

  const lineRows = monthlySeries.map((item) => [item.label, formatCurrency(item.value, currency, language)]);
  const barRows = visibleProducts.map((item) => [item.label, item.typeLabel, formatNumber(item.units, language), formatCurrency(item.revenue, currency, language)]);

  function resetDashboard() {
    setLanguage('en');
    setCurrency('CAD');
    setLineCategory('all');
    setBarCategory('all');
    setBarMetric('units');
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <nav className="topbar" aria-label="Dashboard navigation">
          <a href="#main" className="skip-link">Skip to dashboard</a>
          <div className="brand">
            <span className="brand-mark">B</span>
            <div>
              <strong>{t.appTitle}</strong>
              <small>{t.courseTag}</small>
            </div>
          </div>
          <div className="top-controls">
            <SelectControl label={t.language} value={language} onChange={setLanguage}>
              <option value="en">EN - English</option>
              <option value="fr">FR - Français</option>
            </SelectControl>
            <SelectControl label={t.currency} value={currency} onChange={setCurrency}>
              <option value="CAD">CAD</option>
              <option value="EUR">EUR</option>
            </SelectControl>
          </div>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">{t.courseTag}</p>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
          </div>
          <aside className="notice-card" aria-label={t.dataNoticeTitle}>
            <strong>{t.dataNoticeTitle}</strong>
            <p>{t.dataNotice}</p>
          </aside>
        </div>
      </header>

      <main id="main" className="dashboard">
        <section className="kpi-grid" aria-label="Key performance indicators">
          <KPI label={t.totalRevenue} value={formatCurrency(totals.totalRevenue, currency, language)} helper="Jan-Jun 2026" />
          <KPI label={t.totalUnits} value={formatNumber(totals.totalUnits, language)} helper={t.units} />
          <KPI label={t.bestMonth} value={t[totals.best.month]} helper={formatCurrency(totals.best.clothing + totals.best.beauty, currency, language)} />
          <KPI label={t.topProduct} value={t[totals.top.id]} helper={`${formatNumber(totals.top.units, language)} ${t.units.toLowerCase()}`} />
        </section>

        <section className="chart-card chart-card-wide">
          <div className="card-header-row">
            <div>
              <span className="section-kicker">01</span>
              <h2>{t.lineChartTitle}</h2>
              <p>{t.lineChartContext}</p>
            </div>
            <div className="control-grid">
              <SelectControl label={t.category} value={lineCategory} onChange={setLineCategory}>
                <option value="all">{t.all}</option>
                <option value="clothing">{t.clothing}</option>
                <option value="beauty">{t.beauty}</option>
              </SelectControl>
            </div>
          </div>
          <LineChart data={monthlySeries} language={language} currency={currency} title={t.lineChartTitle} yLabel={t.revenue} />
          <DataTable caption={t.accessibilityTable} headers={[t.month, t.revenue]} rows={lineRows} />
        </section>

        <section className="chart-card chart-card-wide">
          <div className="card-header-row">
            <div>
              <span className="section-kicker">02</span>
              <h2>{t.barChartTitle}</h2>
              <p>{t.barChartContext}</p>
            </div>
            <div className="control-grid two-controls">
              <SelectControl label={t.category} value={barCategory} onChange={setBarCategory}>
                <option value="all">{t.all}</option>
                <option value="clothing">{t.clothing}</option>
                <option value="beauty">{t.beauty}</option>
              </SelectControl>
              <SelectControl label={t.metric} value={barMetric} onChange={setBarMetric}>
                <option value="units">{t.units}</option>
                <option value="revenue">{t.revenue}</option>
              </SelectControl>
            </div>
          </div>
          <BarChart data={visibleProducts} language={language} currency={currency} metric={barMetric} title={t.barChartTitle} />
          <DataTable caption={t.accessibilityTable} headers={[t.product, t.productType, t.units, t.revenue]} rows={barRows} />
        </section>

        <section className="notes-grid">
          <article className="note-card">
            <h2>{t.designNotes}</h2>
            <p>{t.designNotesText}</p>
          </article>
          <article className="note-card">
            <h2>{t.localizationNotes}</h2>
            <p>{t.localizationNotesText}</p>
          </article>
        </section>

        <section className="contact-card">
          <div>
            <h2>{t.contact}</h2>
            <p>{t.contactText}</p>
            <a href="mailto:carla.hajjali@gmail.com">carla.hajjali@gmail.com</a>
          </div>
          <button className="reset-button" type="button" onClick={resetDashboard}>{t.clearFilters}</button>
        </section>
      </main>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
