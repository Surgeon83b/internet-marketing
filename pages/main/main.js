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

const digitalPackages = [
	{
		name: 'СТАБИЛЬНАЯ ЛИДОГЕНЕРАЦИЯ В КРИЗИС',
		info: `SEO-продвижение +</br>Контекстная реклама`,
		additional: `Ищете сплит каналов для</br> стабильного лидгена?</br>Нет ничего надежнее классики!`,
		bonus: `Специальная скидка до <span class="bolder">40%</span></br> на каждую услугу в пакете`,
	},
	{
		name: `УСИЛЕНИЕ</br> ЛИДОГЕНЕРАЦИИ В КРИЗИС`,
		info: `SEO-продвижение +</br>Управление репутацией`,
		additional: `Добавьте к классическому продвижению работу с профильными площадками и отзовиками.`,
		bonus: `Специальная скидка до <span class="bolder">40%</span></br> на каждую услугу в пакете`,
	},
	{
		name: `АНТИБЛОКИРОВКА</br> В СОЦСЕТЯХ`,
		info: `SEO-продвижение +</br>Таргет + Маркетплейсы`,
		additional: `Основные каналы лидгена попали</br> под блокировку?</br>У нас уже есть работающее решение.`,
		bonus: `Специальная скидка до <span class="bolder">20%</span></br> на каждую услугу в пакете`,
	},
]


const footerNavigation = [
	{
		name: `УВЕЛИЧЕНИЕ ПРОДАЖ ДЛЯ ВАШЕГО БИЗНЕСА`,
		info: [
			'SEO',
			'Тариф "Трафик"',
			'Тариф "Объем работ"',
			'Тариф "Лиды / CPA"',
			'Тариф "SEO + Контекст"',
			'Комплексное SEO',
			'Для интернет-магазина',
			'Продвижение в Яндекс',
			'Продвижение в Google',
			'Разовые работы',
			'SEO-аудит сайтов',
			'Вывод из-под санкций',
		]
	},
	{
		name: `РАЗРАБОТКА И ПОДДЕРЖКА САЙТОВ`,
		info: [
			'Разработка',
			'На 1С-Битрикс',
			'На WordPress',
			'На Tilda',
			'Сайт-визитка',
			'Интернет-магазин',
			'Проектирование',
			'Поддержка сайтов',
			'Внесение дорабток',
		]
	},
	{
		name: `КОМПАНИЯ "ДОМ САЙТОВ"`,
		info: [
			'Клиенты и отзывы',
			'Контакты',
			'Работа в Demis Group',
			'Личный кабинет',
			'Статьи',
			'Публичная оферта',
			'Партнерская программа',
			'Гарантии',
			'Внесение дорабток',
		]
	}
]

const regions = [
	{
		city: 'Тула',
		phone: `+7 (495) 223-66-59`,
		address: `г. Тула, ул. Пушкинская, 27`,
		INN: `123456789`,
		OGRN: `123456789010`,
	},
];

bottomFooter = {
	left:
		`© 2008-2022 Компания	«ДОМ САЙТОВ»`,
	right:
		`<a>Карта сайта</a> | <a>Политика конфиденциальности</a`
}



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
for (let i = 0; i < 8; i++) {
	let menuItem = document.createElement('li');
	menuItem.innerHTML = navItems[i];
	navMenu.append(menuItem);
}
let menuItem = document.createElement('li');
menuItem.classList.add('search');
navMenu.append(menuItem);

///////////////////////////////////////////////
////////////////  SECTION 1  //////////////////
///////////////////////////////////////////////

const section1Caption = document.createElement('div');
section1Caption.classList.add('caption');
const section1MainContent = document.createElement('div');
section1MainContent.classList.add('main-content');

headerSection.after(section1);
section1.insertAdjacentHTML("afterbegin", `<div class="caption">
    <span>Антикризисные</span>
    DIGITAL-пакеты
</div>`
);

section1.append(section1MainContent);

for (let i = 0; i < 3; i++) {
	section1MainContent.insertAdjacentHTML("beforeend",
		`<div class="main-item">
		<div class="wrapper">
			<div class="item-caption">
				${digitalPackages[i].name}
			</div>
			<div class="item1">
				${digitalPackages[i].info}
			</div>
			<div class="item2">
				${digitalPackages[i].additional}
			</div>
			<div class="item3">
				${digitalPackages[i].bonus}
			</div>
			<button class="buy">
				Приобрести пакет
			</button>
		</div>
	</div>`
	)
}

///////////////////////////////////////////////
///////////////////  FOOTER  //////////////////
///////////////////////////////////////////////

footerWrapper = document.createElement('div');
footerWrapper.classList.add('wrapper');
footer.prepend(footerWrapper);

footerWrapper.insertAdjacentHTML("beforeend",
	`<div class="bottom-footer">
	 <div>${bottomFooter.left}</div>
	<div>${bottomFooter.right}</div>
	</div>`
)
