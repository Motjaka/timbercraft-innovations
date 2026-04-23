import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="p-8 bg-stone-100 min-h-screen">
      <h1 className="text-4xl font-bold text-emerald-900 mb-6">{t('contact')}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-md">
        <label className="block mb-2">{t('name')}</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2">{t('email')}</label>
        <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2">{t('message')}</label>
        <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-2 mb-4 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-emerald-900 text-white px-4 py-2 rounded">{t('submit')}</button>
      </form>
    </div>
  );
}
