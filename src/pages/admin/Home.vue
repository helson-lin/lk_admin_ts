<template>
    <div class="home_page">
        <div class="top">
            <div class="top-1">
                <div class="top-1-left"></div>
                <div class="top-1-right">
                    <div class="title-num">
                        <span class="title">3个月总访问量</span>
                        <span class="num">1920k</span>
                    </div>
                    <div class="num-list">
                        <div class="num-item">
                            <span class="num-item-title">类目1</span>
                            <span class="num-item-value">19</span>
                        </div>
                        <div class="num-item">
                            <span class="num-item-title">类目1</span>
                            <span class="num-item-value">19</span>
                        </div>
                        <div class="num-item">
                            <span class="num-item-title">类目1</span>
                            <span class="num-item-value">19</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-2"></div>
        </div>
        <div class="chart-box">
            <div ref="line" class="chart"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useEchart } from "../../hooks/useChart";

const getOption = () => {
    // Generate data
    // option
    return {
        normal: {
            top: 200,
            left: 300,
            width: 500,
            height: 400,
            zIndex: 6,
            backgroundColor: "",
        },
        color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
        tooltip: {
            show: true,
            trigger: "item",
        },
        legend: {
            show: true,
            icon: "circle",
            left: "43%",
            top: "90%",
            orient: "horizontal",
            textStyle: {
                fontSize: 16,
                color: "#333",
            },
            data: ["正常指标", "实际指标"],
        },
        radar: {
            center: ["50%", "45%"],
            radius: "70%",
            startAngle: 90,
            splitNumber: 4,
            shape: "polygon",
            name: {
                textStyle: {
                    color: "#333",
                    fontSize: 18,
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: "#0d6dba",
                    opacity: 0.1,
                },
            },
            axisLabel: {
                show: false,
                fontSize: 18,
                color: "#333",
                fontWeight: "normal",
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#4f8bbe",
                    opacity: 1,
                },
            },
            splitLine: {
                lineStyle: {
                    color: "#4f8bbe",
                    opacity: 0.5,
                },
            },
            indicator: [
                {
                    name: "CO",
                    max: 88,
                },
                {
                    name: "CO₂",
                    max: 88,
                },
                {
                    name: "NO",
                    max: 88,
                },
                {
                    name: "H₂S",
                    max: 88,
                },
                {
                    name: "O₄",
                    max: 88,
                },
                {
                    name: "SF6",
                    max: 88,
                },
                {
                    name: "CH",
                    max: 88,
                },
            ],
        },
        series: [
            {
                name: "正常指标",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                areaStyle: {
                    normal: {
                        color: "rgba(245, 166, 35, 0.4)",
                    },
                },
                itemStyle: {
                    color: "rgba(245, 166, 35, 1)",
                    borderColor: "rgba(245, 166, 35, 0.3)",
                    borderWidth: 10,
                },
                lineStyle: {
                    normal: {
                        type: "dashed",

                        color: "rgba(245, 166, 35, 1)",
                        width: 2,
                    },
                },
                data: [[80, 50, 55, 80, 50, 80, 48]],
            },
            {
                name: "实际指标",
                type: "radar",
                symbol: "circle",
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        color: "rgba(19, 173, 255, 1)",
                        borderColor: "rgba(19, 173, 255, 0.4)",
                        borderWidth: 10,
                    },
                },
                areaStyle: {
                    normal: {
                        color: "rgba(19, 173, 255, 0.5)",
                    },
                },
                lineStyle: {
                    normal: {
                        color: "rgba(19, 173, 255, 1)",
                        width: 2,
                        type: "dashed",
                    },
                },
                data: [[60, 60, 65, 60, 70, 40, 80]],
            },
        ],
    };
};
// eslint-disable-next-line no-unused-vars
const { domRef: line } = useEchart(getOption);
</script>
<style lang="scss" scoped>
.home_page ::v-deep().ivu-grid .ivu-grid-item-main {
    height: 100% !important;
}

.home_page {
    .top {
        width: 100%;
        padding-bottom: 20px;

        .top-1 {
            width: 420px;
            height: 210px;
            background: rgba(41, 105, 255, 1);
            padding-right: 20px;
            box-sizing: border-box;
            display: flex;
            align-items: center;

            &-left {
                position: relative;
                left: 20px;
                width: 178px;
                height: 158px;
                // margin: 20px 0 0 20px;
                background: url("../../assets/img/dashbord.png") 100% 100%/178px
                    156px no-repeat;
            }

            &-right {
                flex: 1;
                position: relative;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                top: 10px;
                padding-left: 20px;
                box-sizing: border-box;

                .title-num {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    border-bottom: 1px solid;
                    padding-bottom: 10px;

                    .title {
                        font-size: 16px;
                    }

                    .num {
                        font-size: 22px;
                        font-weight: bold;
                        font-family: AliMaMa, monospace, sans-serif;
                    }
                }

                .num-list {
                    width: 100%;
                    padding-top: 20px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .num-item {
                        display: flex;
                        flex-direction: column;

                        &-title {
                            color: rgba(255, 255, 255, 0.6);
                        }

                        &-value {
                            margin-top: 10px;
                            font-weight: bold;
                            font-family: AliMaMa, monospace, sans-serif;
                        }
                    }
                }
            }
        }
    }
}

.chart-box {
    width: calc(100% / 4);
    height: 320px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
}

.chart {
    width: 88%;
    height: 100%;
}
</style>
