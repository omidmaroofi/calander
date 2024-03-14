# calander v2

```javascript
var jalaaliDate = toJalaali(2024, 3, 10)
console.log(jalaaliDate)
```

```javascript
var emroz = new Date()
var jalaaliDate = toJalaali(
  emroz.getFullYear(),
  emroz.getMonth() + 1,
  emroz.getDate()
)
console.log(jalaaliDate)
```

```markdown
***************************************************************************** start day
```
```javascript
startDay = getStartOfWeekDayNumber(
firstDay.getDay()+2 === 0 ? 7 : firstDay.getDay()+2
),
firstRender = !\_initialized_FirstTime;
```

```markdown
*****************************************************************************shamsi
```
// Convert Gregorian date to Jalali (Shamsi)
```javascript
function gregorianToJalali(gy, gm, gd) {
return toJalaali(gy, gm, gd);
}
```

// Convert Jalali (Shamsi) date to formatted string
```javascript
function formatJalaliDate(jy, jm) {
var monthNames = [
"فروردین",
"اردیبهشت",
"خرداد",
"تیر",
"مرداد",
"شهریور",
"مهر",
"آبان",
"آذر",
"دی",
"بهمن",
"اسفند"
];
return jy + " " + monthNames[jm - 1];
}
```

// Given Gregorian date
```javascript
var gregorianDate = "11 مارس";
```

// Parse Gregorian date
```javascript
var parts = gregorianDate.split(" ");
var day = parseInt(parts[0]);
var monthName = parts[1];
var monthNames = [
"فروردین",
"اردیبهشت",
"خرداد",
"تیر",
"مرداد",
"شهریور",
"مهر",
"آبان",
"آذر",
"دی",
"بهمن",
"اسفند"
];
var monthIndex = monthNames.indexOf(monthName) + 1;
```

// Convert to Jalali (Shamsi)
```javascript
var jalaliDate = gregorianToJalali(2024, monthIndex, day);
```

// Format Jalali (Shamsi) date
```javascript
var formattedDate = formatJalaliDate(jalaliDate.jy, jalaliDate.jm);
```
// Output formatted date
```javascript
console.log(formattedDate);
```

```markdown
********************************************************************line:469
// start persian calendar (shamsi jalali)
********************************************************************
```
```javascript
var gy = \_calendar_CurrentDate.getFullYear();
var gm = \_calendar_CurrentDate.getMonth() + 1; // Month is zero-based, so add 1
var gd = \_calendar_CurrentDate.getDate();
// Convert Gregorian date to Jalaali
var jalaaliDate = toJalaali(gy, gm, gd);
// Jalaali year number
jy = jalaaliDate.jy;
jm = jalaaliDate.jm;
jd = jalaaliDate.jd;
// Output Jalaali year number
console.log(jy, jm, jd);
```


```markdown
********************************************************************line:4682
```
```javascript
// تبدیل میلادی به شمسی

// تاریخ میلادی مورد نظر
var monthNumberSelected = \_calendar_CurrentDate.getMonth() + 1, // اینجا برای ماه‌ها، از 1 به بالا شروع می‌شود، بنابراین باید یک واحد اضافه کنیم.
today = new Date(),
year = today.getFullYear(),
day = today.getDate();

// تبدیل تاریخ میلادی به شمسی جلالی
var jalaliDate = toJalaali(year, monthNumberSelected, day);

// فرمت دادن به تاریخ شمسی جلالی
var formattedJalaliDate = formatJalaliDate(jalaliDate.jy, jalaliDate.jm);

// نمایش تاریخ شمسی جلالی
console.log(formattedJalaliDate);
```
