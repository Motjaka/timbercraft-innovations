import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: 'Home',
          products: 'Products',
          sustainability: 'Sustainability',
          contact: 'Contact',
          order: 'Order',
          heroTitle: 'Crafting Quality from Nature',
          heroSubtitle: 'Sustainable lumber production for a better future.',
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Submit',
          product: 'Product',
          quantity: 'Quantity',
        },
      },
      es: {
        translation: {
          home: 'Inicio',
          products: 'Productos',
          sustainability: 'Sostenibilidad',
          contact: 'Contacto',
          order: 'Pedido',
          heroTitle: 'Creando Calidad de la Naturaleza',
          heroSubtitle: 'Producción sostenible de madera para un futuro mejor.',
          name: 'Nombre',
          email: 'Correo electrónico',
          message: 'Mensaje',
          submit: 'Enviar',
          product: 'Producto',
          quantity: 'Cantidad',
        },
      },
      et: {
        translation: {
          home: 'Avaleht',
          products: 'Tooted',
          sustainability: 'Jätkusuutlikkus',
          contact: 'Kontakt',
          order: 'Tellimus',
          heroTitle: 'Kvaliteet loodusest',
          heroSubtitle: 'Säästev puidutootmine parema tuleviku nimel.',
          name: 'Nimi',
          email: 'E-post',
          message: 'Sõnum',
          submit: 'Saada',
          product: 'Toode',
          quantity: 'Kogus',
        },
      },
      ru: {
        translation: {
          home: 'Главная',
          products: 'Продукция',
          sustainability: 'Устойчивое развитие',
          contact: 'Контакты',
          order: 'Заказ',
          heroTitle: 'Качество от природы',
          heroSubtitle: 'Экологичное производство пиломатериалов для лучшего будущего.',
          name: 'Имя',
          email: 'Email',
          message: 'Сообщение',
          submit: 'Отправить',
          product: 'Продукт',
          quantity: 'Количество',
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
