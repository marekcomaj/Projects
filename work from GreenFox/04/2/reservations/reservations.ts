interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

function pickRandom(data: string[] | string) {
    let idx = Math.floor(Math.random() * data.length);
    return data[idx]
}

class Reservations implements Reservationy {

    getDowBooking(): string {
        let days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
        return pickRandom(days);
    }

    getCodeBooking(): string {
        let result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (var i = 0; i < 8; i++) {
            result += pickRandom(characters);
        }
        return result;
    }
}

let reservationOne = new Reservations();

for (let i = 0; i < 8; i++) {
    console.log(`Booking# ${reservationOne.getCodeBooking()} for ${reservationOne.getDowBooking()}`);
}
