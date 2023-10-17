<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
  </div>
  <div class="details">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  position: relative;
}

.details {
  width: 100%;
  text-align: center;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.5em;
    text-align: left;
    align-items: center;
  }

  i {
    position: absolute;
    border-radius: 8px;
    height: inherit;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
