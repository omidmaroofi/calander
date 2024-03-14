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
