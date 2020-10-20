<template>
    <button class="abc-button"
            :class="classes"
            :disabled="disabled"
    >
        <span v-if="loading" class="abc-loadingIndicator" />
        <slot/>
    </button>
</template>

<script lang="ts">
    import { computed } from "vue";
    export default {
        // inheritAttrs: false,
        props: {
            theme: {
                type: String,
                default: 'button'
            },
            inverse: {
                type: String,
                default: 'button'
            },
            size: {
                type: String,
                default: "normal"
            },
            level: {
                type: String,
                default: "normal"
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            }
        },
        setup(props) {
            const { theme, size, level, round, inverse } = props;
            const classes = computed( () => {
                return {
                    [`abc-theme-${theme}`]: theme,
                    [`abc-inverse-${inverse}`]: inverse,
                    [`abc-size-${size}`]: size,
                    [`abc-level-${level}`]: level,
                    "abc-button-round": round
                }
            });
            return { classes }
        }
    };
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $abcG: #10C0B0;
    $abcO: #FFA900;
    $red: red;
    $grey: grey;
    $radius: 4px;
    .abc-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background-color: #fff;
        color: $abcO;
        border: 1px solid $abcO;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        transition: background 250ms;
        & + & {
            margin-left: 8px;
        }
        &:hover, &:focus {
            color: $abcO;
            border-color: $abcO;
        }
        &:focus {
            outline: none;
        }
        &::-moz-focus-inner {
            border: 0;
        }
        &.abc-size-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }
        &.abc-size-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }

        &.abc-theme-link {
            border-color: transparent;
            box-shadow: none;
            color: $abcG;
            &:hover, &:focus {
                color: lighten($abcO, 5%);
            }
        }
        &.abc-theme-text {
            border-color: transparent;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus {
                background : darken(white, 5%);
            }
        }

        &.abc-theme-button {
            &.abc-level-main {
                background: $abcO;
                color: white;
                border-color: $abcO;
                &:hover,&:focus {
                    background: darken($abcO, 5%);
                    border-color: darken($abcO, 5%);
                }
            }
            &.abc-level-danger {
                background: red;
                border-color: red;
                color: white;
                &:hover,&:focus {
                    background: darken(red, 5%);
                    border-color: darken(red, 5%);
                }
            }
            &.abc-level-info {
                background: #ccc;
                border-color: #ccc;
                color: white;
                &:hover,&:focus {
                    background: darken(#ccc, 10%);
                    border-color: darken(#ccc, 10%);
                }
            }
            &.abc-level-success {
                background: $abcG;
                border-color: $abcG;
                color: white;
                &:hover,&:focus {
                    background: darken($abcG, 6%);
                    border-color: darken($abcG, 6%);
                }
            }
        }
        &.abc-theme-link {
            &.abc-level-danger {
                color: red;
                &:hover, &focus {
                    color: $abcO;
                }
            }
        }
        &.abc-theme-text {
            &.abc-level-main {
                color: $abcO;
            }
            &.abc-level-success {
                color: $abcG;
            }
            &.abc-level-danger {
                color: red;
            }
        }
        &.abc-button-round {
            border-radius: 16px;
        }
        &.abc-theme-button {
            &[disabled] {
                background: lighten($abcO, 20%);
                border: none;
                color: white;
                cursor: not-allowed;
                &:hover,&:focus {
                    background: lighten($abcO, 20%);
                }
            }
        }
        &.abc-level-danger {
            &[disabled] {
                background: lighten(red, 20%);
                border: none;
                color: white;
                cursor: not-allowed;
                &:hover,&:focus {
                    background: lighten(red, 20%);
                }
            }
        }
        &.abc-level-success {
            &[disabled] {
                background: lighten($abcG, 20%);
                border: none;
                color: white;
                cursor: not-allowed;
                &:hover,&:focus {
                    background: lighten($abcG, 20%);
                }
            }
        }

        &.abc-theme-link, &abc-theme-text {
            &[disabled] {
                cursor: not-allowed;
                color: grey;
            }
        }

        > .abc-loadingIndicator {
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border: 2px solid;
            border-color: lighten($abcG,10%) $abcG darken($abcG, 10%) transparent;
            animation: abc-spin 1.2s infinite linear;
        }
    }
    @keyframes abc-spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }


</style>