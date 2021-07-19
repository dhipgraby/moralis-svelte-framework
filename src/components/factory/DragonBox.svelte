<script>

import DragonDna from './DragonDna.svelte'

export let dragonId


</script>

<div id={dragonId} class="col-lg-4" align="left">
    
<DragonDna />
<div  class="catBox light-b-shadow">
    
    <div id={dragonId} class="cat">
        <div class="cat__ear">
            <div id="leftEar" class="cat__ear--left">
                <div class="cat__ear--left-inside" />
            </div>
            <div id="rightEar" class="cat__ear--right">
                <div class="cat__ear--right-inside" />
            </div>
        </div>

        <div id="head" class="cat__head">
            <div id="midDot" class="cat__head-dots">
                <div id="leftDot" class="cat__head-dots_first" />
                <div id="rightDot" class="cat__head-dots_second" />
            </div>
            <div id="eyes" class="cat__eye">
                <div class="cat__eye--left">
                    <span class="pupil-left" />
                </div>
                <div class="cat__eye--right">
                    <span class="pupil-right" />
                </div>
            </div>
            <div id="nose" class="cat__nose" />

            <div class="cat__mouth-contour" />
            <div class="cat__mouth-left" />
            <div class="cat__mouth-right" />

            <div id="leftWhiskers" class="cat__whiskers-left" />
            <div id="rightWhiskers" class="cat__whiskers-right" />
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
      
</div>

</div>
