const langEl = document.querySelector(".header__option");
const link = document.querySelectorAll(".header__lang");
const headerServices = document.querySelector(".header__services");
const headerExperience = document.querySelector(".header__experience");
const headerPortfolio = document.querySelector(".header__portfolio");
const headerPartners = document.querySelector(".header__partners");
const headerContact = document.querySelector(".header__contact");
const heroTitle = document.querySelector(".hero__title");
const servicesTitle = document.querySelector(".services__title");
const servicesText1 = document.querySelector(".services__text1");
const servicesText2 = document.querySelector(".services__text2");
const servicesText3 = document.querySelector(".services__text3");
const servicesText4 = document.querySelector(".services__text4");
const servicesText5 = document.querySelector(".services__text5");
const servicesText6 = document.querySelector(".services__text6");
const resultTitle = document.querySelector(".results__title");
const resultSubTitle1 = document.querySelector(".results__subtitle1");
const resultSubTitle2 = document.querySelector(".results__subtitle2");
const resultSubTitle3 = document.querySelector(".results__subtitle3");
const portfolioSubtitle = document.querySelector(".portfolio__subtitle");
const partnersTitle = document.querySelector(".partners__title");
const partnersSubTitle = document.querySelector(".partners__subtitle");
const contactsTitle = document.querySelector(".contacts__title");
const contactsSubTitle = document.querySelector(".contacts__subtitle");
const contactsFormTitle = document.querySelector(".contacts__form__title");
const contactsLabel1 = document.querySelector(".contacts__label1");
const contactsLabel2 = document.querySelector(".contacts__label2");
const contactsLabel3 = document.querySelector(".contacts__label3");
const contactsLabel4 = document.querySelector(".contacts__label4");
const contactsButton = document.querySelector(".contacts__button");
const footerText = document.querySelector(".footer__text");
const footerInfo = document.querySelector(".footer__info");
const portfolioLink = document.querySelectorAll(".text_see");

link.forEach((el) => {
  el.addEventListener("click", () => {
    const attr = el.getAttribute("language");
    headerServices.textContent = data[attr].headerServices;
    headerExperience.textContent = data[attr].headerExperience;
    headerPartners.textContent = data[attr].headerPartners;
    headerContact.textContent = data[attr].headerContact;
    heroTitle.textContent = data[attr].heroTitle;
    servicesTitle.textContent = data[attr].servicesTitle;
    servicesText1.textContent = data[attr].servicesText1;
    servicesText2.textContent = data[attr].servicesText2;
    servicesText3.textContent = data[attr].servicesText3;
    servicesText4.textContent = data[attr].servicesText4;
    servicesText5.textContent = data[attr].servicesText5;
    servicesText6.textContent = data[attr].servicesText6;
    resultTitle.textContent = data[attr].resultTitle;
    resultSubTitle1.textContent = data[attr].resultSubTitle1;
    resultSubTitle2.textContent = data[attr].resultSubTitle2;
    resultSubTitle3.textContent = data[attr].resultSubTitle3;
    portfolioSubtitle.textContent = data[attr].portfolioSubtitle;
    partnersTitle.textContent = data[attr].partnersTitle;
    partnersSubTitle.textContent = data[attr].partnersSubTitle;
    contactsTitle.textContent = data[attr].contactsTitle;
    contactsSubTitle.textContent = data[attr].contactsSubTitle;
    contactsFormTitle.textContent = data[attr].contactsFormTitle;
    contactsLabel1.textContent = data[attr].contactsLabel1;
    contactsLabel2.textContent = data[attr].contactsLabel2;
    contactsLabel3.textContent = data[attr].contactsLabel3;
    contactsLabel4.textContent = data[attr].contactsLabel4;
    contactsButton.textContent = data[attr].contactsButton;
    footerText.textContent = data[attr].footerText;
    footerInfo.textContent = data[attr].footerInfo;
    portfolioLink.textContent = data[attr].portfolioLink;
  });
});

const data = {
  english: {
    headerServices: "Services",
    headerExperience: "Experience",
    headerPortfolio: "Portfolio",
    headerPartners: "Partners",
    headerContact: "Contact Us",
    heroTitle: "honesty trumps profit",
    servicesTitle:
      "We specialize in the development of IT products using cutting edge technologies",
    servicesText1:
      "UX design is all about identifying and solving user problems; UI design is all about creating intuitive, aesthetically-pleasing, interactive guiding, and responsive experiences for users",
    servicesText2:
      "Mobile application development is the process of creating software applications that run on a mobile device",
    servicesText3:
      "Web application development is the complex process of designing, building, testing, and deploying a web-based app",
    servicesText4:
      "SaaS, is a way of delivering applications over the internet as a service rather than via a standalone application",
    servicesText5:
      "IT consulting services are advisory services that help clients assess different technology strategies and, in doing so, align their technology strategies with their business or process strategies",
    servicesText6:
      "The JavaScript programming language activates and deactivates certain parts of the site",
    resultTitle: "Industry Experience",
    resultSubTitle1: "Years of experience",
    resultSubTitle2: "Projects",
    resultSubTitle3: "Employee",
    portfolioSubtitle:
      "For your very specific industry, we have highly-tailored IT solutions",
    partnersTitle: "Partners",
    partnersSubTitle:
      "For your very specific industry, we have highly-tailored IT solutions",
    contactsTitle: "Are you interested in our services?",
    contactsSubTitle:
      "Leave the introductory information and we will start cooperation.",
    contactsFormTitle: "Contact us by filling the form",
    contactsLabel1: "Full name",
    contactsLabel2: "Email address",
    contactsLabel3: "Phone number",
    contactsLabel4: "I want to protect my idea",
    contactsButton: "Send",
    footerText: "We create ethical products and services for humans",
    footerInfo: "All rights reserved - 2022 Wasaf",
    portfolioLink: "See more"
  },
  uzbek: {
    headerServices: "Xizmatlar",
    headerExperience: "Tajriba",
    headerPortfolio: "Portfolio",
    headerPartners: "Hamkorlar",
    headerContact: "Aloqa",
    heroTitle:
      "halollik foydadan ustun turadi",
    servicesTitle:
      "Biz ilg'or texnologiyalardan foydalangan holda IT mahsulotlarini ishlab chiqishga ixtisoslashganmiz",
    servicesText1:
      "Node.js - bu V8 ramkasida qurilgan dasturiy platforma. Node.js JavaScript kodini mahalliy kodga aylantiradi.",
    servicesText2:
      "tezkor Javascript kutubxonasi",
    servicesText3:
      "Veb-ilovalarni ishlab chiqish - bu veb-ilovani loyihalash, qurish, sinovdan o'tkazish va joylashtirishning murakkab jarayoni",
    servicesText4:
      "SaaS, ilovalarni mustaqil dastur orqali emas, balki xizmat sifatida Internet orqali yetkazib berish usulidir",
    servicesText5:
      "IT-konsalting xizmatlari mijozlarga turli xildagi texnologik strategiyalarni baholashda yordam beradigan maslahat xizmatlaridir va shunday qilishi bilan birga, ularning texnologik strategiyalarni biznes yoki jarayon strategiyalari bilan moslashtiradi",
    servicesText6:
    "JavaScript dasturlash tili saytni xaratkatga keltiradi va malum bir qismini xarakatdan toxtatadi",
    resultTitle: "Sanoat tajribasi",
    resultSubTitle1: "Yillik tajriba",
    resultSubTitle2: "Loyihalar",
    resultSubTitle3: "Hodimlar",
    portfolioSubtitle:
      "Sizning aniq sanoatingiz uchun bizda yuqori darajada moslashtirilgan IT yechimlari mavjud",
    partnersTitle: "Hamkorlar",
    partnersSubTitle:
      "Sizning aniq sanoatingiz uchun bizda yuqori darajada moslashtirilgan IT yechimlari mavjud",
    contactsTitle: "Xizmatlarimiz sizga qiziqmi?",
    contactsSubTitle:
      "Kirish ma'lumotlarini qoldiring va biz hamkorlikni boshlaymiz",
    contactsFormTitle: "Formani to’ldirish orqali biz bilan bog’laning",
    contactsLabel1: "F.I.SH",
    contactsLabel2: "Elektron pochta manzili",
    contactsLabel3: "Telefon raqam",
    contactsLabel4: "Men o'z fikrimni himoya qilishni xohlayman",
    contactsButton: "Yuborish",
    footerText:
      "Full Stack developer",
    footerInfo: "Barcha huquqlar himoyalangan - 2023 Shahzodbek",
    portfolioLink: "ko'proq ko'ring",
  },

  russian: {
    headerServices: "Услуги",
    headerExperience: "Опыт",
    headerPortfolio: "Портфолио",
    headerPartners: "Партнеры",
    headerContact: "Контакт",
    heroTitle: "честность выше прибыли",
    servicesTitle:
      "Мы специализируемся на разработке ИТ-продуктов с использованием передовых технологий",
    servicesText1:
      "Node.js — это программная платформа, построенная на платформе V8. Node.js преобразует код JavaScript в собственный код.",
    servicesText2:
      "быстрая библиотека Javascript",
    servicesText3:
      "Разработка веб-приложений — это сложный процесс проектирования, создания, тестирования и развертывания веб-приложения",
    servicesText4:
      "SaaS - это способ доставки приложений через Интернет как услугу, а не через отдельное приложение",
    servicesText5:
      "Консультационные услуги в области ИТ — это консультационные услуги, которые помогают клиентам оценить различные технологические стратегии и при этом согласовать свои технологические стратегии со своими бизнес-стратегиями или стратегиями процессов",
    servicesText6:
      "Язык программирования JavaScript активирует и деактивирует определенные части сайта.",
    resultTitle: "Опыт работы в отрасли",
    resultSubTitle1: "Годы опыта",
    resultSubTitle2: "Проекты",
    resultSubTitle3: "Сотрудники",
    portfolioSubtitle:
      "Для вашей очень специфической отрасли у нас есть специально разработанные ИТ-решения",
    partnersTitle: "Партнеры",
    partnersSubTitle:
      "Для вашей очень специфической отрасли у нас есть специально разработанные ИТ-решения",
    contactsTitle: "Вы заинтересованы в наших услугах?",
    contactsSubTitle: "Оставьте вводную информацию и мы начнем сотрудничество",
    contactsFormTitle: "Связаться с нами, заполнив форму",
    contactsLabel1: "ФИО",
    contactsLabel2: "Адрес электронной почты",
    contactsLabel3: "Номер телефона",
    contactsLabel4: "Я хочу защитить свою идею",
    contactsButton: "Отправить",
    footerText: "Full Stack developer",
    footerInfo: "Bсе права защищены - 2023 Shahzodbek",
    portfolioLink: "узнать больше",
  },
};