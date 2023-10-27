<script>
    import { createEventDispatcher } from 'svelte';

    export let label;
    export let identifier;

    export let min;
    export let max;

    const dispatch = createEventDispatcher();

    function cambiarMin(e) {
        const nuevoMin = parseInt(e.target.value);
        dispatch('update', { min: nuevoMin, max });
    }

    function cambiarMax(e) {
        const nuevoMax = parseInt(e.target.value);
        dispatch('update', { min, max: nuevoMax });
    }
</script>

<p>
    <label for={`${identifier}_min`}>{label} mínimo</label>
    <input type="range" min={0} max={50000} value={min} on:change={cambiarMin} />
    <span>{min}</span>
</p>

<p>
    <label for={`${identifier}_max`}>{label} máximo</label>
    <input type="range" min={0} max={50000} value={max} on:change={cambiarMax} />
    <span>{max}</span>
</p>