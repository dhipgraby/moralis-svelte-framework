<!-- Cattributes  -->
<div id="cattributes">
    <div class="form-group">
        <label for="formControlRange"
            ><b>Eye shape</b><span
                class="badge bg-dark ml-2"
                id="eyeName"
            /></label
        >
        <input
            type="range"
            min="0"
            max="9"
            class="form-control-range"
            id="eyeshape"
        />
    </div>
    <div class="form-group">
        <label for="formControlRange"
            ><b>Decorative head pattern</b><span
                class="badge bg-dark ml-2"
                id="decorationName"
            /></label
        >
        <input
            type="range"
            min="0"
            max="9"
            class="form-control-range"
            id="decorativepattern"
        />
    </div>
    <div class="form-group">
        <div class="row">
            <div class="col">
                <label for="formControlRange"
                    ><b>Mid color</b><span
                        class="badge bg-dark ml-2"
                        id="innerDecorationCode"
                    /></label
                >
                <input
                    type="range"
                    min="10"
                    max="98"
                    class="form-control-range"
                    id="innerDecorationColor"
                />
            </div>
            <div class="col">
                <label for="formControlRange"
                    ><b>Side color</b><span
                        class="badge bg-dark ml-2"
                        id="outerDecorationCode"
                    /></label
                >
                <input
                    type="range"
                    min="10"
                    max="98"
                    class="form-control-range"
                    id="outerDecorationColor"
                />
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="formControlRange"
            ><b>Animation</b><span
                class="badge bg-dark ml-2"
                id="animationName"
            /></label
        >
        <input
            type="range"
            min="0"
            max="9"
            class="form-control-range"
            id="animation"
        />
    </div>
</div>

<style>
    
    .form-group{
        margin-top: 15px;
    }

    input[type="range"] {
        width: 100%;
    }
</style>
