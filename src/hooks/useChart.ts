import * as echarts from 'echarts';
import type {Ref} from 'vue';

const useEchart = (getOption: GetOptionFunc, chartoption?: EchartOption): {domRef: Ref<HTMLElement | undefined>} => {
	let timer: null | number = null;

	const domRef = ref<HTMLElement | undefined>();
	const renderChart = (): void => {
		if (!domRef.value) {
			throw new Error('沒有找到DOM');
		} else {
			let chart = echarts.getInstanceByDom(domRef.value);

			if (chart) {
				chart.clear();
			} else {
				chart = echarts.init(domRef.value);
			}

			if (!getOption) {
				throw new Error('No getOption Function defined');
			}

			const chartOption = getOption();
			chart.setOption(chartOption);
		}
	};

	const init = (chartoption: EchartOption): void => {
		if (chartoption.isInterval && chartoption.interval) {
			renderChart();
			timer = setInterval(() => {
				renderChart();
			}, chartoption.interval);
		} else {
			renderChart();
		}
	};

	onMounted(() => {
		if (!chartoption) {
			renderChart();
		} else {
			init(chartoption);
		}
	});
	onUnmounted(() => {
		if (timer) {
			clearInterval(timer);
		}
	});
	return {
		domRef,
	};
};

export {
	useEchart,
};
