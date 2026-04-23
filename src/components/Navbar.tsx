import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="bg-emerald-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">TimberCraft</div>
      <div className="space-x-4">
        <Link to="/">{t('home')}</Link>
        <Link to="/products">{t('products')}</Link>
        <Link to="/sustainability">{t('sustainability')}</Link>
        <Link to="/contact">{t('contact')}</Link>
        <Link to="/order">{t('order')}</Link>
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="bg-orange-500 text-white px-2 py-1 rounded"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="et">ET</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </nav>
  );
}
