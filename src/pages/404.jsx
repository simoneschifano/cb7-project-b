import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";

import styles from "@/styles/Custom404.module.scss";

export default function Custom404() {
  useEffect(() => {
    const canvas = document.getElementById("box");
    const ctx = canvas.getContext("2d");

    function rnd(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    function rndColor() {
      let c = "#";
      for (let i = 0; i < 6; i++) {
        c += rnd(0, 15).toString(16);
      }
      return c;
    }

    function drawRandomLine() {
      const x = rnd(0, 1500);
      const y = rnd(0, 750);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 1, y + 1);
      ctx.strokeStyle = rndColor();
      ctx.fillStyle = rndColor();
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    function draw404Text() {
      const x = rnd(0, 1500);
      const y = rnd(0, 750);
      ctx.font = "50px Arial";
      ctx.fillStyle = rndColor();
      ctx.fillText("404", x, y);
    }

    const run = () => {
      drawRandomLine();
    };

    const run404 = () => {
      draw404Text();
    };

    const runInterval = setInterval(run, 100);
    const run404Interval = setInterval(run404, 1000);

    return () => {
      clearInterval(runInterval);
      clearInterval(run404Interval);
    };
  }, []);

  return (
    <div className={styles.Error}>
      <div className={styles.Canvas}>
        <canvas id="box" width="1580" height="780"></canvas>
      </div>
      <p className={styles.Paragraph}>
        You get lost in the deep space...
        <Link href={"/"}>Back to home..</Link>
      </p>
      <Image
        className={styles.Error__Img}
        src="/spaceman.jpg"
        alt="error image"
        width={100}
        height={160}
      />
    </div>
  );
}
