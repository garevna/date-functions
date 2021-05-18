# garevna-date-functions

Functions help to breakdown the schedule by week

Start - January 1, 2018 (Monday)

##  Install

```
yarn add garevna-date-functions
```

## import

```js
import {
  getWeekDay,
  getWeekNumber
} from 'garevna-date-functions'
```

###### or full list of functions:

```js
import {
  getWeekDay,
  getWeekNumber,
  getWeekStartDate,
  getWeekEndDate,

  getFormattedISODate,
  getFormattedDate,

  getNextWeekDate,
  getPrevWeekDate,

  getWeekStartDateByWeekNumber,
  getWeekEndDateByWeekNumber
} from 'garevna-date-functions'
```

## Usage

#### The date as an argument can be passed in any format:
* as Date object: **`new Date(...)`**
* as number of ms: **`Date.now()`** or **`1621338895820`**
* as string: '**`2021-05-18`**' or '**`Tue May 18 2021`**'

#### The date result may have any fromat you prefer:
* number of ms: **`Date.now()`** or **`1621338895820`**
* ISO string: '**`2021-05-18`**'
* Date string: '**`Tue May 18 2021`**'

##### getWeekStartDate
```js
getWeekStartDate('2021-05-18', 'date') // Mon May 17 2021
getWeekStartDate('Mon May 17 2021', 'ISO') // 2021-05-16

getWeekStartDate(new Date(2021, 4, 18), 'ISO') // 2021-05-16
getWeekStartDate(1621338895820, 'date') // Mon May 17 2021
```

##### getWeekStartDateByWeekNumber
```js
getWeekStartDateByWeekNumber(174, 'ISO') // 2021-05-02
getWeekStartDateByWeekNumber(174, 'date') // Mon May 03 2021
getWeekStartDateByWeekNumber(174, 'number') // 1619992800000
```

##### getWeekEndDateByWeekNumber
```js
getWeekEndDateByWeekNumber(174, 'ISO') // 2021-05-08
getWeekEndDateByWeekNumber(174, 'date') // Sun May 09 2021
getWeekEndDateByWeekNumber(174, 'number') // 1620511200000
```

##### getWeekNumber
```js
getWeekNumber(new Date(2018, 0, 1))  // 1
getWeekNumber('2018-01-01')  // 1
/* current date 2021-05-18 */
getWeekNumber(new Date())  // 176
getWeekNumber(Date.now())  // 176
```

##### getNextWeekDate
```js
getNextWeekDate('2021-05-18') // 2021-05-25
getNextWeekDate('2021-05-18', 'ISO') // 2021-05-25
getNextWeekDate('2021-05-18', 'date') // Tue May 25 2021
getNextWeekDate('2021-05-18', 'number') // Tue May 25 2021

getNextWeekDate(new Date(2021, 5, 18), 'date') // Tue May 25 2021
getNextWeekDate(1621337588553, 'date') // Tue May 18 2021
getNextWeekDate(1621337588553, 'number') // 1621337588553
```
