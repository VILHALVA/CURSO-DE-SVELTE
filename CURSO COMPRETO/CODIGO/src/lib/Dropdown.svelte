<script>
    export let identifier;
    export let label;
    export let choices;
    export let value;
</script>

<p>
    <label for={identifier}>{label}</label>
    <select id={identifier} bind:value>
        {#each choices as choice}
            <option value={choice}>{choice}</option>
        {/each}
    </select>
</p>