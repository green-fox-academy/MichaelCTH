interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  protected dayInWeek: string[];

  constructor() {
    this.dayInWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  }

  getDowBooking(): string {
    let ranNum = Math.floor(Math.random() * 7);
    return this.dayInWeek[ranNum];
  }

  getSingleRandomCode(): string {
    let ranNum = Math.floor(Math.random() * 36);
    if (ranNum < 10) {
      return String.fromCharCode("0".charCodeAt(0) + ranNum);
    } else {
      return String.fromCharCode("A".charCodeAt(0) + ranNum - 10);
    }
  }
  getCodeBooking(): string {
    let rst = "";
    for (let index = 0; index < 8; index++) {
      rst += this.getSingleRandomCode();
    }
    return rst;
  }
}

export { Reservation };
