export let oneDay = 60 * 60 * 24 * 1000;
export let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
export let date = new Date();
export let year = date.getFullYear();
export let month = date.getMonth();
export let daysMap = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
export let monthMap = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
export const getDayDetails =(args: any)=> {
    let date = args.index - args.firstDay; 
    let day = args.index%7;
    let prevMonth = args.month-1;
    let prevYear = args.year;
    if(prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    return {
        date: _date,
        day,
        month, 
        timestamp,
        dayString: daysMap[day]
    }
}
export const getNumberOfDays = (year:number, month:number)=> {
    return 40 - new Date(year, month, 40).getDate();
}
export const getMonthDetails = (year: number, month: number)=> {
    let firstDay = (new Date(year, month)).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0; 
    let cols = 7;

    for(let row=0; row<rows; row++) {
        for(let col=0; col<cols; col++) { 
            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month
            });
            monthArray.push(currentDay);
            index++;
        }
    }
    return monthArray;
}


export const getDateFromDateString =(dateValue: any)=> {
    let dateData = dateValue.split('-').map((d:any)=>parseInt(d, 10));
    if(dateData.length < 3) 
        return null;

    let year = dateData[0];
    let month = dateData[1];
    let date = dateData[2];
    return {year, month, date};
}

export const getMonthStr =(month: any)=> monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

export const getDateStringFromTimestamp =(timestamp:number)=> {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth()+1;
    let date = dateObject.getDate();
    return dateObject.getFullYear() + '-' + (month < 10 ? '0'+month : month) + '-' + (date < 10 ? '0'+date : date);
}