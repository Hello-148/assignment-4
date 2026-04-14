function runq4()
{
    let base = parseInt(prompt("Enter base fare:"));
    let distance = parseInt(prompt("Enter distance:"));
    let minutesLate = parseInt(prompt("Enter minutes late:"));
    let seed = parseInt(prompt("Enter seed:"));

    let fare = base + 7 * distance;

    if (minutesLate > 15) {
        fare += 20;
    }

    if (distance > 10) {
        fare += Math.floor(fare * 0.1);
    }

    if (seed % 2 === 1) {
        fare -= seed;
    } else {
        fare += seed;
    }

    // round up to nearest multiple of 5
    fare = Math.ceil(fare / 5) * 5;

    alert(fare);
}