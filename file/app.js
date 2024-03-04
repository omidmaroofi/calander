const body = document.querySelector("body");

const _container = document.createElement("div");
_container.classList.add("container");
_container.id = "caldivid";
_container.setAttribute("dir", "rtl");
// ****************************************************************************************
const _table = document.createElement("table");
_table.width = "100%";
_table.border = 0;
_table.cellspacing = 1;
_table.cellpadding = 2;
const _tbody = document.createElement("tbody");
// ****************************************************************************************
const _tr0 = document.createElement("tr");
var td;
create(td, "td", _tr0, "شنبه", "calheader");
create(td, "td", _tr0, "یکشنبه", "calheader");
create(td, "td", _tr0, "دوشنبه", "calheader");
create(td, "td", _tr0, "سه شنبه", "calheader");
create(td, "td", _tr0, "چهارشنبه", "calheader");
create(td, "td", _tr0, "پنجشنبه", "calheader");
create(td, "td", _tr0, "جمعه", "calheader");
_tbody.appendChild(_tr0);
// ********************************************
const M1D1_tr = document.createElement("tr");
create(td, "td", M1D1_tr);
create(td, "td", M1D1_tr);
create(td, "td", M1D1_tr);
create(td, "td", M1D1_tr);
create(td, "td", M1D1_tr);
create(td, "td", M1D1_tr);
_tbody.appendChild(M1D1_tr);
// ********************************************
const M2D1_tr = document.createElement("tr");
create(td, "td", M2D1_tr);
create(td, "td", M2D1_tr);
create(td, "td", M2D1_tr);
create(td, "td", M2D1_tr);
create(td, "td", M2D1_tr);
create(td, "td", M2D1_tr);
_tbody.appendChild(M2D1_tr);
// ********************************************
const M3D1_tr = document.createElement("tr");
create(td, "td", M3D1_tr);
create(td, "td", M3D1_tr);
create(td, "td", M3D1_tr);
create(td, "td", M3D1_tr);
create(td, "td", M3D1_tr);
create(td, "td", M3D1_tr);
_tbody.appendChild(M3D1_tr);
// ********************************************

// ****************************************************************************************
_table.appendChild(_tbody);
_container.appendChild(_table);
body.appendChild(_container);

// ****************************************************************************************
function create(_element, element, parrent, title = "", _class = "", dir = "") {
  var _element = document.createElement(element);
  $(_element).text(title);
  $(_element).addClass(_class);
  _element.dir, dir;
  parrent.appendChild(_element);
}
