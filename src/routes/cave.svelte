<script>
	import { onMount } from "svelte";
	import { Factory, defaultDragon } from "@factory/Factory";
	import DragonDna from "../components/factory/DragonDna.svelte";
	import {
		getAllYourCatIds,
		getDetailsAllCats,
		getCatDetails,
	} from "@contracts/methods";

	let FactoryClass = new Factory();
	let allDragons;

	onMount(async () => {
		let allcats = await getAllYourCatIds();
		var dragArr = {};
		allDragons = await getDetailsAllCats(allcats);
		for (var i = 0; i < allDragons.length; i++) {
			console.log(allDragons[i]);
			dragArr = {
				id: i,
				dna: FactoryClass.dnaFromGenes(allDragons[i].genes),
				gen: allDragons[i].generation,
			};
			getHtmlForKitty(dragArr);
		}
	});

	function getDragon(dragon) {
		dragon = JSON.stringify(dragon);
		return dragon;
	}

	function getHtmlForKitty(dragon) {
		try {
			let html = `
          <div class="col-lg-4" id="kitty${dragon.id}" align="left">
			<div class="row col-sm-12">

				<div class="col-sm-6" id="catDNA" align="left">
					<span class="badge bg-dark ml-2">
						
						DNA:
						<!-- Colors -->
						<span id="dnabody"></span>
						<span id="dnamouth"></span>
						<span id="dnaeyes"></span>
						<span id="dnaears"></span>

						<!-- Cattributes -->
						<span id="dnashape"></span>
						<span id="dnadecoration"></span>
						<span id="dnadecorationMid"></span>
						<span id="dnadecorationSides"></span>
						<span id="dnaanimation"></span>
						<span id="dnaspecial"></span>
					</span>
				</div> 

				<div class="col-sm-6" align="right">
					<span class="badge bg-light text-dark">
			
							GEN: <span id="catGenNum">0</span>
					
					</span>
				</div>
			</div>

          <div class="catBox light-b-shadow">
        
            <div id="cat" class="cat">
                <div class="cat__ear">
                    <div id="leftEar" class="cat__ear--left">
                        <div class="cat__ear--left-inside"></div>
                    </div>
                    <div id="rightEar" class="cat__ear--right">
                        <div class="cat__ear--right-inside"></div>
                    </div>
                </div>

                <div id="head" class="cat__head">
                    <div id="midDot" class="cat__head-dots">
                        <div id="leftDot" class="cat__head-dots_first"></div>
                        <div id="rightDot" class="cat__head-dots_second"></div>
                    </div>
                    <div id="eyes" class="cat__eye">
                        <div class="cat__eye--left">
                            <span class="pupil-left"></span>
                        </div>
                        <div class="cat__eye--right">
                            <span class="pupil-right"></span>
                        </div>
                    </div>
                    <div id="nose" class="cat__nose"></div>

                    <div class="cat__mouth-contour"></div>
                    <div class="cat__mouth-left"></div>
                    <div class="cat__mouth-right"></div>

                    <div id="leftWhiskers" class="cat__whiskers-left"></div>
                    <div id="rightWhiskers" class="cat__whiskers-right"></div>
                </div>

                <div class="cat__body">

                    <div class="cat__chest"></div>
                    <div class="cat__chest_inner"></div>

                    <div id="leftRearPaw" class="cat__paw-left_rear"></div>
                    <div id="leftFrontPaw" class="cat__paw-left_front"></div>

                    <div id="rightFrontPaw" class="cat__paw-right_front"></div>
                    <div id="rightRearPaw" class="cat__paw-right_rear"></div>

                    <div id="tail" class="cat__tail"></div>
                </div>
            </div>
            <br>
        
          </div>
          </div>`;

			FactoryClass.render(dragon, "kitty" + dragon.id);
			document.getElementById("dragonGrid").innerHTML += html;
		} catch (error) {
			console.log("In getHtmlForKitty(id): " + error);
		}
	}
</script>

<svelte:head>
	<title>Dragon-masters Cavern</title>

	<link rel="stylesheet" href="assets/frontend/css/cats.css" />
	<link rel="stylesheet" href="assets/frontend/css/animations.css" />
	<link rel="stylesheet" href="assets/frontend/css/catBox.css" />
	<link rel="stylesheet" href="assets/frontend/css/colors.css" />
	<link rel="stylesheet" href="assets/frontend/css/factory.css" />
</svelte:head>

<div class="mainContainer body" align="center">
	<h1><i class="fas fa-dungeon" /></h1>
	<h1 class="reflex-box">Dragon cavern</h1>

	<div class="row container" id="dragonGrid" />
</div>

<style></style>
