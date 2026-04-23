import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Order() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ product: 'Pine', quantity: '', name: '', email: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Order sent successfully!');
        setFormData({ product: 'Pine', quantity: '', name: '', email: '' });
      } else {
        alert('Failed to send order.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send order.');
    }
  };

  return (
    <div className="p-8 bg-stone-100 min-h-screen">
      <h1 className="text-4xl font-bold text-emerald-900 mb-6">{t('order')}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-md">
        <label className="block mb-2">{t('product')}</label>
        <select value={formData.product} onChange={(e) => setFormData({...formData, product: e.target.value})} className="w-full p-2 mb-4 border rounded">
          <option>Pine</option>
          <option>Spruce</option>
          <option>Oak</option>
        </select>
        <label className="block mb-2">{t('quantity')}</label>
        <input type="number" value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2">{t('name')}</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2">{t('email')}</label>
        <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="bg-emerald-900 text-white px-4 py-2 rounded">{t('submit')}</button>
      </form>
    </div>
  );
}
