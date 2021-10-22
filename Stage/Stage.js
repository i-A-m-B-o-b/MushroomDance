/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("start", "./Stage/costumes/start.svg", {
        x: 248.74775,
        y: 219.57404682276328
      }),
      new Costume("frame2", "./Stage/costumes/frame2.svg", {
        x: 248.74775,
        y: 219.574035
      }),
      new Costume("frame3", "./Stage/costumes/frame3.svg", {
        x: 248.74775,
        y: 219.57404682276328
      }),
      new Costume("frame4", "./Stage/costumes/frame4.svg", {
        x: 248.74775,
        y: 219.574035
      }),
      new Costume("frame5", "./Stage/costumes/frame5.svg", {
        x: 248.74775,
        y: 219.573975
      }),
      new Costume("frame6", "./Stage/costumes/frame6.svg", {
        x: 248.74775,
        y: 219.573975
      }),
      new Costume("frame7", "./Stage/costumes/frame7.svg", {
        x: 248.74775,
        y: 219.573975
      }),
      new Costume("frame8", "./Stage/costumes/frame8.svg", {
        x: 248.74775,
        y: 219.573975
      }),
      new Costume("frame9", "./Stage/costumes/frame9.svg", {
        x: 295.04504,
        y: 227.30933593710762
      }),
      new Costume("frame10", "./Stage/costumes/frame10.svg", {
        x: 295.04504,
        y: 227.30930687421522
      }),
      new Costume("frame11", "./Stage/costumes/frame11.svg", {
        x: 248.74775,
        y: 221.25673999999995
      }),
      new Costume("frame12 (angry)", "./Stage/costumes/frame12 (angry).svg", {
        x: 248.74775,
        y: 221.25674
      }),
      new Costume("frame13", "./Stage/costumes/frame13.svg", {
        x: 248.74775,
        y: 221.25673999999998
      }),
      new Costume(
        "frame14 (sin explain)",
        "./Stage/costumes/frame14 (sin explain).svg",
        { x: 248.74775, y: 221.2567399999999 }
      ),
      new Costume("frame15 (ss)", "./Stage/costumes/frame15 (ss).svg", {
        x: 248.74775,
        y: 221.25673999999984
      }),
      new Costume("frame16 (sssii)", "./Stage/costumes/frame16 (sssii).svg", {
        x: 248.74775,
        y: 221.25673999999978
      }),
      new Costume("frame14 (in)", "./Stage/costumes/frame14 (in).svg", {
        x: 248.74775,
        y: 221.2567399999997
      })
    ];

    this.sounds = [
      new Sound("Mushroom Dance", "./Stage/sounds/Mushroom Dance.mp3"),
      new Sound("Mushroom Dance2", "./Stage/sounds/Mushroom Dance2.wav"),
      new Sound("lived", "./Stage/sounds/lived.wav"),
      new Sound("a life of", "./Stage/sounds/a life of.wav"),
      new Sound("sin", "./Stage/sounds/sin.wav"),
      new Sound("a life", "./Stage/sounds/a life.wav"),
      new Sound("of", "./Stage/sounds/of.wav"),
      new Sound("sssss", "./Stage/sounds/sssss.wav"),
      new Sound("in", "./Stage/sounds/in.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
  }

  *whenGreenFlagClicked() {
    yield* this.startSound("Mushroom Dance");
    this.costume = "start";
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.18);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.18);
    this.costume = "start";
    this.costume = "start";
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.18);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.16);
    this.costumeNumber += 1;
    yield* this.wait(0.18);
    this.costume = "start";
    yield* this.wait(0.2);
    this.costume = "frame9";
    yield* this.wait(0.6);
    this.costume = "frame10";
    yield* this.wait(0.7);
    this.costume = "frame11";
    yield* this.wait(2.1);
    this.costume = "frame12 (angry)";
    yield* this.wait(0.6);
    this.costume = "frame13";
    yield* this.wait(0.6);
    this.costume = "frame14 (sin explain)";
    yield* this.wait(0.5);
    this.costume = "frame15 (ss)";
    yield* this.wait(0.5);
    this.costume = "frame16 (sssii)";
    yield* this.wait(0.25);
    this.costume = "frame14 (in)";
  }
}
