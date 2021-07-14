<script>
import { onMount } from "svelte";
   
function addJsLinkToBody(url) {
        var link = document.createElement("script");        
        link.src = url;
        document.getElementsByTagName("body")[0].appendChild(link);
    }

    const jsLinks = [
        "assets/frontend/pageLogic/factoryLogic.js",
        "assets/frontend/pageLogic/sharedLogic.js",
        "assets/frontend/components/colors.js",
        "assets/frontend/components/catSettings.js",
        "assets/frontend/components/catFactory.js",
        "assets/frontend/components/catConstants.js",
        "assets/frontend/helperFunctions.js",
    ];
    
    
onMount(()=>{
 
    for(var i = 0;i < jsLinks.length;i++){
            addJsLinkToBody(jsLinks[i]);
    }
})

   
</script>
