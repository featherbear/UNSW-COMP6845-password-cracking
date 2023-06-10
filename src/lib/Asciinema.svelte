<script lang="ts">
  import { onMount } from "svelte";

  export let path: string;
  export let options = {};
  export let fixed: boolean = false;
  export let loopDelay: number = 2000;

  let defaults = {
    preload: true,
    poster: "npt:10:10",
    autoPlay: true /*, loop: true */,
  };
  let elem;

  onMount(() => {
    // if (loopDelay > 0) {
    //   console.info(`Custom loop delay set for ${path} of ${loopDelay}ms`)
    //   // defaults.loop = false;
    // }

    let player = window["AsciinemaPlayer"].create(
      "asciinema/recordings/" + path,
      elem,
      {
        ...defaults,
        ...options,
      }
    );

    if (loopDelay) {
      player.addEventListener("ended", () => {
        setTimeout(
          () =>
            player.getCurrentTime() == player.getDuration() && player.play(),
          loopDelay
        );
      });
    }
  });
</script>

<div bind:this={elem} class:hover={!fixed} />

<style>
  div.hover {
    transition: transform 0.4s;
    transform: scale(0.97);
    margin: 0 auto;
  }
  div.hover:hover {
    transform: scale(1);
  }
</style>
