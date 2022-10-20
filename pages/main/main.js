const phoneNumber = '+7 (4872) 79-29-10';
const imagePrefix = '../../assets/images';
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

const clients = [
	'oriflame',
	'consultant',
	'shar',
	'uralsib',
	'vostochny',
	'kvadrum',
	'skoda',
	'zolotoy',
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
		name: `РАЗРАБОТКА</br> И ПОДДЕРЖКА САЙТОВ`,
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
		name: `КОМПАНИЯ</br> "ДОМ САЙТОВ"`,
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
		INN: `ИНН 123456789`,
		OGRN: `ОГРН 123456789010`,
	},
];

bottomFooter = {
	left:
		`© 2008-2022 Компания	«ДОМ САЙТОВ»`,
	right:
		`<a>Карта сайта</a> | <a>Политика конфиденциальности</a`
}


///////////////////////////////////////////////
//////////////////  HEADER  ///////////////////
///////////////////////////////////////////////

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
const headerTopCaption = document.createElement('h2');
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
	if (i==0) menuItem.classList.add('active');
	menuItem.innerHTML = navItems[i];
	let menuArrow = document.createElement('span');

	 navMenu.append(menuItem); menuItem.append(menuArrow);
}
let menuItem = document.createElement('li');
menuItem.classList.add('search');
navMenu.append(menuItem);

///////////////////////////////////////////////
////////////////  SECTION 1  //////////////////
///////////////////////////////////////////////

const section1MainContent = document.createElement('div');
section1MainContent.classList.add('main-content');
const section1Wrapper = document.createElement('div');
section1Wrapper.classList.add('wrapper');

headerSection.after(section1);
section1.append(section1Wrapper);
section1Wrapper.insertAdjacentHTML("afterbegin", `<h1 class="caption">
    <span>Антикризисные</span>
    DIGITAL-пакеты
</h1>`
);

section1Wrapper.append(section1MainContent);

for (let i = 0; i < 3; i++) {
	section1MainContent.insertAdjacentHTML("beforeend",
		`<div class="main-item">
		<div class="wrapper">
			<h2 class="item-caption">
				${digitalPackages[i].name}
			</h2>
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
///////////////////  CLIENTS  /////////////////
///////////////////////////////////////////////

const clientsSection = document.createElement('section');
clientsSection.classList.add('clients');
const clientsCaption = document.createElement('h2');
clientsCaption.classList.add('caption');
clientsCaption.innerHTML = 'Наши клиенты';
clientsSection.append(clientsCaption);

const clientItems = document.createElement('div');
clientItems.classList.add('items');

for (let i = 0; i < 8; i++) {
	clientItems.insertAdjacentHTML("beforeend",
		`<div class="item"></div>`);
	clientItems.children[i].style.backgroundImage = `url(${imagePrefix}/clients/${clients[i]}.svg)`;
	//clientItems.children[i].style.backgroundImage = 
}

clientsSection.append(clientItems);

section1.insertAdjacentElement("afterend", clientsSection);



///////////////////////////////////////////////
///////////////////  FOOTER  //////////////////
///////////////////////////////////////////////

const footerWrapper = document.createElement('div');
footerWrapper.classList.add('wrapper');
const mainFooter = document.createElement('div');
mainFooter.classList.add('main-footer');
footer.prepend(footerWrapper);

footerWrapper.insertAdjacentElement("beforeend", mainFooter);
footerWrapper.insertAdjacentHTML("beforeend",
	`<div class="bottom-footer">
	 <div>${bottomFooter.left}</div>
	<div>${bottomFooter.right}</div>
	</div>`
)

mainFooter.insertAdjacentHTML("afterbegin",
	`<div class="about">
					<div class="logo">
						<div class="logo-image white"></div>
						<div class="logo-text">
							<div class="logo-text1 white"></div>
							<div class="logo-text2 white"></div>
						</div>
					</div>
					<div class="contact-info">
						<div class="region">
							<span class="region">Ваш регион: </span><span class="city">${regions[0].city}</span>
						</div>
						<div class="contacts">
							<div class="phone">${regions[0].phone}</div>
							<div class="address">${regions[0].address}</div>
						</div>
						<div class="bank-data">
							<span class="INN">${regions[0].INN}</span></br>
							<span class="OGRN">${regions[0].OGRN}</span>
						</div>
					</div>
					<div class="social">
						<div class="vk"></div>
						<div class="telegram"></div>
					</div>
				</div >`
);

const footerMenu = document.createElement('div');
footerMenu.classList.add('footer-menu');

mainFooter.insertAdjacentElement("beforeend", footerMenu);

for (let i = 0; i < 3; i++) {
	let menuColumn = document.createElement('div');
	menuColumn.classList.add('menu-column');

	let columnHeader = document.createElement('h2');
	columnHeader.classList.add('column-header');
	columnHeader.innerHTML = footerNavigation[i].name;

	menuColumn.insertAdjacentElement("afterbegin", columnHeader);

	let columnItems = document.createElement('ul');
	columnItems.classList.add('column-items');
	for (let j = 0; j < footerNavigation[i].info.length; j++) {
		columnItems.insertAdjacentHTML("beforeend",
			`<li><a href="#">${footerNavigation[i].info[j]}</a></li>`
		)
	}

	menuColumn.insertAdjacentElement("beforeend", columnItems);

	footerMenu.insertAdjacentElement("beforeend", menuColumn);
}
