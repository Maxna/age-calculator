class Date {
  contructor(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
  }
  yearsOld(presentYear, presentMonth, presentDay){
    let remainYear = presentYear - this.year;
    let remainMonth = presentMonth - this.month;
    let remainDay = presentDay - this.day;
    let remainDate = (remainYear * 31536000)+(remainMonth * 2592000)+(remainDay * 86400);
    return remainDate;
  }
}

export { Date };
