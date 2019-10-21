import { Reservation } from "./Reservation";

const test = new Reservation();
for (let index = 0; index < 20; index++) {
  console.log(`Booking# ${test.getCodeBooking()} for ${test.getDowBooking()}`);
}
