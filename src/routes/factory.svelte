
<script>
import { onMount } from 'svelte';


import BodyFactory from '../components/factory/BodyFactory.svelte';
import { Factory } from '@factory/Factory'

var FactoryClass

onMount(()=>{
  FactoryClass = new Factory()
  FactoryClass.getDefaultKittie()
})


</script>
  <svelte:head>
      
  <link rel="stylesheet" href="assets/frontend/css/mystyle.css">
  <link rel="stylesheet" href="assets/frontend/css/cats.css">
  <link rel="stylesheet" href="assets/frontend/css/animations.css">
  <link rel="stylesheet" href="assets/frontend/css/catBox.css">

  <link rel="stylesheet" href="assets/frontend/css/colors.css">
  <link rel="stylesheet" href="assets/frontend/css/factory.css">
  <link rel="stylesheet" href="assets/frontend/css/frontend.css">
	<title>Dragons factory</title>

</svelte:head>


<div class="container">
<BodyFactory />
</div>