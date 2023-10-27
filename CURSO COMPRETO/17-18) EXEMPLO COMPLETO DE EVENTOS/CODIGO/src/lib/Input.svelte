<script>
    export let identifier;
    export let label;
    export let value;
</script>

<p>
    <label for={identifier}>{label}</label>
    <input id={identifier} type="text" bind:value />
</p>