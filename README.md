```markdown
* Build (layout, days, etc) line:448

* Build Layout              line:467

* Build Side-Menu           line:453

* Build Widget Mode         line:1528

* Build Date-Picker Mode    line:1747

* Build Document Events   line:1947

* Full Day View           line:2381

* Full Week View          line:3221

* Full Month View         line:4254

* Full Month View - Years Drop-Down Menu  line:4729

* Full Month View - Days    line:5030

* Full Month View - Day Events  line:5307
```




# تحلیل کدهای calendar.js

نمایش تایتل تقویم (خط 12573)

```javascript
function getCustomFormattedDateText(dateFormat, date) {
  var result = dateFormat,
    weekDayNumber = getWeekdayNumber(date)

  result = result.replace("{dddd}", _options.dayNames[weekDayNumber])
  result = result.replace("{ddd}", _options.dayNamesAbbreviated[weekDayNumber])
  result = result.replace("{dd}", padNumber(date.getDate()))
  result = result.replace("{d}", date.getDate())

  result = result.replace("{o}", getDayOrdinal(date.getDate()))

  result = result.replace("{mmmm}", _options.monthNames[date.getMonth()])
  result = result.replace(
    "{mmm}",
    _options.monthNamesAbbreviated[date.getMonth()]
  )
  result = result.replace("{mm}", padNumber(date.getMonth() + 1))
  result = result.replace("{m}", date.getMonth() + 1)

  result = result.replace("{yyyy}", date.getFullYear())
  result = result.replace("{yyy}", date.getFullYear().toString().substring(1))
  result = result.replace("{yy}", date.getFullYear().toString().substring(2))
  result = result.replace(
    "{y}",
    parseInt(date.getFullYear().toString().substring(2)).toString()
  )

  return result
}
```

تغییر سال میلادی به شمسی (خط 4693)

```javascript
function updateFullMonthViewYearDropDownColors() {
  var yearSelected =
      _element_View_FullMonth_TitleBar_YearSelector.getElementsByClassName(
        "year"
      ),
    yearSelectedLength = yearSelected.length

  if (yearSelectedLength >= 1) {
    for (
      var yearsSelectedIndex = 0;
      yearsSelectedIndex < yearSelectedLength;
      yearsSelectedIndex++
    ) {
      if (yearSelected[yearsSelectedIndex].className !== "year") {
        yearSelected[yearsSelectedIndex].className = "year"
      }
    }
  }

  // تغییر سال میلادی به شمسی
  var year = getElementByID(_element_ID_YearSelected + _jy)
  if (year !== null) {
    year.className += " year-selected"
  }

  if (!_element_Mode_DatePicker_Enabled) {
    var yearsHandledForEvents = []

    getAllEventsFunc(function (eventDetails) {
      var fromYear = eventDetails.from.getFullYear()

      if (yearsHandledForEvents.indexOf(fromYear) === -1) {
        var yearEvents = getElementByID(_element_ID_YearSelected + fromYear)
        if (
          yearEvents !== null &&
          yearEvents.className.indexOf(" year-selected") === -1
        ) {
          yearEvents.className += " year-has-events"
        }

        yearsHandledForEvents.push(fromYear)
      }
    })
  }

  return year
}
```
