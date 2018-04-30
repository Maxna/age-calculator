class Dates {
  contructor(year, month, day){
    this.year = year;
    this.month = month;
    this.day = day;
  }
  differentDate(otherYear, otherMonth, otherDay){
    let remainYear = otherYear - this.year;
    let remainMonth = otherMonth - this.month;
    let remainDay = otherDay - this.day;
    let remainDate = (remainYear * 31536000)+(remainMonth * 2592000)+(remainDay * 86400);
    return remainDate;
  }
}

export { Dates };
