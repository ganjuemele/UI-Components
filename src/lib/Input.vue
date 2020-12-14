<template>
    <div class="input-module">
        <input type="text" placeholder="placeholder" class="input-basic"/>
        <hr />
        <text class="input-discription">基础用法</text>
    </div>

    <div class="input-module">
        <input type="text" placeholder="placeholder" class="input-basic"/>
        <hr />
        <text class="input-discription">前后加入图标文字</text>
    </div>
</template>

<script>
    export default {
        name: 'InputComponent'
    };
</script>

<style lang="scss" scoped>
    $abcG: #10C0B0;
    $abcO: #FFA900;
    input {
        border: none;
        outline: none;
        background-color: rgba(0,0,0,0);
        -moz-appearance:button; /* Firefox */
        -webkit-appearance:button; /* Safari 和 Chrome */
        appearance:none;
    }
    .input-module {
        display: inline-flex;
        width: 88vw;
        border: 1px solid grey;
        flex-direction: column;
        margin: 10px auto;
        > hr {
            margin: 8px;
        }
    }
    .input-discription {
        margin: 10px 10px 20px;
    }

    input.input-basic {
        width: 66.6666%;
        height: 30px;
        font-size: 15px;
        padding-left: 10px;
        margin: 20px auto;
        border: 1px solid #ddd;
        border-radius: 5px;
        &:focus {
            border: $abcG 1px solid;
            box-shadow: 0 0 3px $abcG;
        }
    }
</style>