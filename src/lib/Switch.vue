<template>
    <div class="switch-module">
        <button @click="toggle" :class="[{'abc-checked':value, 'abc-orange':value},
        {'switchShadow switchShadow-orange':evo==='Shadow'},
        {'checkedDisBgc-orange':value===true&&toggleDisable===true},
        {uncheckedDisBgc:value===false&&toggleDisable===true}]"
        :disabled="evo==='Disabled'&&toggleDisable">
            <span class="switchControl" />
            <span v-if="evo==='Text'" class="switchText" :class="value?'switchTextOn':'switchTextOff'" />
        </button>

        <button v-if="evo==='Disabled'" @click="switchControl" :class="{switchControl:toggleDisable}"
                style="width:auto;border-radius:3px;padding:0 6px;color:#fff;margin-top:10px;">
            Toggle disable
        </button>

        <hr />

        <div>{{evo}}: Orange</div>
    </div>

    <div class="switch-module">
        <button @click="toggle" :class="[{'abc-checked':value, 'abc-green':value},
        evo==='Shadow'?'switchShadow switchShadow-green':'',
        {'checkedDisBgc-green':value===true&&toggleDisable===!0},
        {uncheckedDisBgc:value===false&&toggleDisable===true}]"
        :disabled="evo==='Disabled'&&toggleDisable">
            <span class="switchControl" />
            <span v-if="evo==='Text'" class="switchText" :class="value?'switchTextOn':'switchTextOff'" />
        </button>
        <button v-if="evo==='Disabled'" @click="switchControl" :class="{switchControl:toggleDisable}"
                style="width:auto;border-radius:3px;padding:0 6px;color:#fff;margin-top:10px;">
            Toggle disable
        </button>
        <hr/>
        <div>{{evo}}: Green</div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Switch',
        props: { //接收父组件传来的值
            value: Boolean,
            evo: String,
        },
        data(){
            return { toggleDisable: !1 }
        },
        setup(props, context) {
            // console.log(props.evo)
            const toggle= () => {
                context.emit('update:value', !props.value)
            };
            const switchControl = function() { //箭头函数无this
                // console.log('dis', context, this.toggleDisable)
                this.toggleDisable= !this.toggleDisable;
            };
            return { toggle, switchControl }
        }
    };
</script>

<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    $abcG: #10C0B0;
    $abcO: #FFA900;
    .switch-module button {
        height: $h;
        width: $h*2;
        border: none;
        background: #999;
        border-radius: $h/2;
        position: relative;
        margin: auto;
        &:focus {
            outline: none;
        }
        &.abc-checked {
            & > span {
                left: calc(100% - #{$h2} - 2px);
            }
        }
        &.abc-orange {
            background-color: $abcO;
        }
        &.abc-green {
            background-color: $abcG;
        }
        &.switchShadow {
            box-shadow: 0 2px 3px #999;
        }
        &.switchShadow-green.abc-checked {
            box-shadow: 0 2px 4px $abcG;
        }
        &.switchShadow-orange.abc-checked {
            box-shadow: 0 2px 4px $abcO;
        }
        &.checkedDisBgc-green {
            background-color: rgba(0, 184, 147, 0.3);
        }
        &.checkedDisBgc-orange {
            background-color: rgba(255, 169, 0, 0.3);
        }
    }
    span.switchControl {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: all .3s cubic-bezier(.1, 0.7, 0.25, 1.2);
    }
    /*span.switchControl:hover {*/
    /*    animation: swchCtrl 2s ease-in-out;*/
    /*}*/
    /*@keyframes swchCtrl {*/
    /*    from {width: 22px;}*/
    /*    50% {width: 30px;}*/
    /*    to {width: 22px;}*/
    /*}*/
    span.switchText::after {
        position: absolute;
        height: 22px;
        display: flex;
        align-items: center;
        top: 0;
        color: white;
        font-weight: bold;
        font-size: 12px;
    }
    span.switchTextOn::after {
        content: '关';
        left: 5px;
    }
    span.switchTextOff::after {
        content: '开';
        right: 5px;
    }
    .switch-module {
        display: inline-flex;
        width: 44vw;
        border: 1px solid grey;
        flex-direction: column;
        padding: 10px 5px;
        margin: 10px 3px;
        > hr {
            margin: 8px;
        }
    }
    .switchControl {
        background-color: #ddd;
    }
    .uncheckedDisBgc {
        background-color: #ddd;
    }
</style>