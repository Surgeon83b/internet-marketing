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
const headerTopContactUs = document.createElement('div');
headerTopContactUs.classList.add('contact-us');


const section1Caption = document.createElement('div');
section1Caption.classList.add('caption');
const section1MainContent = document.createElement('div');
section1MainContent.classList.add('main-content');

section1.prepend(section1Caption);
section1Caption.after(section1MainContent);
