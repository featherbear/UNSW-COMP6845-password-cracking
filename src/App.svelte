<script lang="ts">
  import GettingStarted from "./sections/getting-started.svx";
  import WordlistAttack from "./sections/wordlist-attack.svx";
  import HybridAttack from "./sections/hybrid-attack.svx";
  import BruteforceAttack from "./sections/bruteforce-attack.svx";
  import CombinationAttack from "./sections/combination-attack.svx";
  import Rules from "./sections/rules.svx";
  import OutroRemark from "./sections/outro-remark.svx";
  import OfficeCracking from "./sections/office-cracking.svx";
  import Exercise from "./sections/exercise.svx";

  import Header from "./sections/header.svx";

  import Navbar from "./lib/Navbar.svelte";

  let showAll = false;

  let items = [
    ["Getting Started", GettingStarted],
    ["Wordlist Attack", WordlistAttack],
    ["Hybrid Attack", HybridAttack],
    ["Bruteforce Attack", BruteforceAttack],
    ["Combination Attack", CombinationAttack],
    ["Rules", Rules],
    ["Remark", OutroRemark],
    ["Office Cracking", OfficeCracking],
    ["Exercise", Exercise],
  ] satisfies [string, any][];

  let activeItem = GettingStarted;
  function onHashChange() {
    showAll = location.hash == "#all";
    activeItem = items[Number(location.hash.slice(1))]?.[1] || GettingStarted;
  }

  onHashChange();
  $: !showAll &&
    (location.hash = String(
      items.findIndex(([_, elem]) => elem === activeItem)
    ));

  let containerElem: HTMLElement;
  let componentRef;
  let firstRun = true;
  $: if (componentRef && containerElem) {
    containerElem.querySelectorAll("blockquote").forEach((elem) => {
      if (elem.textContent.startsWith("$> ")) {
        elem.style.setProperty("--leftLineColour", "#21b0d7");
      }
    });

    if (!showAll) {
      if (firstRun) {
        firstRun = false;
      } else {
        setTimeout(() => window.scrollTo(0, containerElem.offsetTop - 50), 0);
      }
    }
  }
</script>

<svelte:window on:hashchange={onHashChange} />
<Header />
<hr />

{#if showAll}
  {#each items as [_, component]}
    <svelte:component this={component} />
  {/each}
{:else}
  <Navbar {items} bind:activeItem />

  <main bind:this={containerElem}>
    <svelte:component this={activeItem} bind:this={componentRef} />
  </main>
{/if}

<style>
  main {
    min-height: 100vh;
  }
</style>
