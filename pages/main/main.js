const phoneNumber = '+7 (4872) 79-29-10';
const navItems = [
    'УВЕЛИЧЕНИЕ ПРОДАЖ',
    'СОЗДАНИЕ САЙТОВ',
    'ПОДДЕРЖКА',
    'БИТРИКС 24',
    'О КОМПАНИИ',
    'ОТЗЫВЫ',
    'КЕЙСЫ',
    'КОНТАКТЫ'
]
let headerSection = document.createElement('div');
headerSection.classList.add('header-section');

let section1 = document.createElement('section');
section1.classList.add('section1');

const footer = document.createElement('footer');
footer.classList.add('footer');

document.body.prepend(footer);
document.body.prepend(section1);
document.body.prepend(headerSection);

const header = document.createElement('header');
header.classList.add('header');
const headerInfo = document.createElement('div');
headerInfo.classList.add('header-info');

headerSection.prepend(headerInfo);
headerInfo.before(header);

const headerTop = document.createElement('div');
headerTop.classList.add('header-top');
const headerBottom = document.createElement('div');
headerBottom.classList.add('header-bottom');
header.append(headerTop);
headerTop.after(headerBottom);

const headerTopWrapper = document.createElement('div');
headerTopWrapper.classList.add('wrapper');

headerTop.prepend(headerTopWrapper);

const headerTopLogo = document.createElement('div');
headerTopLogo.classList.add('logo');
const headerTopCaption = document.createElement('div');
headerTopCaption.classList.add('caption');
headerTopCaption.innerHTML = 'Увеличиваем продажи в Вашем бизнесе!';
const headerTopContactUs = document.createElement('div');
headerTopContactUs.classList.add('contact-us');

headerTopWrapper.append(headerTopLogo);
headerTopWrapper.append(headerTopCaption);
headerTopWrapper.append(headerTopContactUs);

const headerTopLogoImage = document.createElement('div');
headerTopLogoImage.classList.add('logo-image');
const headerTopLogoText = document.createElement('div');
headerTopLogoText.classList.add('logo-text');
const headerTopLogoText1 = document.createElement('div');
headerTopLogoText1.classList.add('logo-text1');
const headerTopLogoText2 = document.createElement('div');
headerTopLogoText2.classList.add('logo-text2');

headerTopLogo.append(headerTopLogoImage);
headerTopLogo.append(headerTopLogoText);
headerTopLogoText.append(headerTopLogoText1);
headerTopLogoText.append(headerTopLogoText2);

const phone = document.createElement('span');
phone.classList.add('phone');
phone.innerHTML = phoneNumber;
const callButton = document.createElement('button');
callButton.classList.add('call-button');
const callButtonCaption = document.createElement('div');
callButtonCaption.classList.add('button-caption');
const phoneIcon = document.createElement('div');
phoneIcon.classList.add('phone-icon');
const orderCall = document.createElement('div');
orderCall.classList.add('order-call');
orderCall.innerHTML = 'Заказать звонок';

headerTopContactUs.append(phone);
headerTopContactUs.append(callButton);
callButton.append(callButtonCaption);
callButtonCaption.append(phoneIcon);
callButtonCaption.append(orderCall);

const headerBottomWrapper = document.createElement('div');
headerBottomWrapper.classList.add('wrapper');
const navHeader = document.createElement('nav');
navHeader.classList.add('nav-header');
const navMenu = document.createElement('ul');
navMenu.classList.add('nav-menu');

headerBottom.append(headerBottomWrapper);
headerBottomWrapper.append(navHeader);
navHeader.append(navMenu);
for (let i=0; i<8;i++) {
    let menuItem = document.createElement('li');
    menuItem.innerHTML = navItems[i];
    navMenu.append(menuItem);
}
let menuItem = document.createElement('li');
menuItem.classList.add('search');
navMenu.append(menuItem);



const section1Caption = document.createElement('div');
section1Caption.classList.add('caption');
const section1MainContent = document.createElement('div');
section1MainContent.classList.add('main-content');

section1.prepend(section1Caption);
section1Caption.after(section1MainContent);
