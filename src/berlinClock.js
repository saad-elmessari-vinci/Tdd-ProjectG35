export class Main {
  //Y ==> lamp is on (color is yellow) ,R==> lamp is on (color is red), O==> lamp is off
  singleMinutesRow(minutes) {
    const numberOfYellowLamps = minutes % 5;
    return (
      "Y".repeat(numberOfYellowLamps) + "O".repeat(4 - numberOfYellowLamps)
    );
  }

  
}
