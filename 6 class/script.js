const li = Array.from(document.querySelectorAll("li"));

const getElementsAttr = (key) => (el) => el.getAttribute(key);

const getAttrDataSlide = getElementsAttr("data-slide");
const getAttrID = getElementsAttr("id");

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrID);
