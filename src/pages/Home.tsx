import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="p-8 bg-stone-100 min-h-screen">
      <h1 className="text-6xl font-bold text-emerald-900 mb-4">{t('heroTitle')}</h1>
      <p className="text-2xl text-stone-700">{t('heroSubtitle')}</p>
      <img src="https://picsum.photos/seed/lumber/1200/600" alt="Lumber" className="mt-8 rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
    </div>
  );
}
