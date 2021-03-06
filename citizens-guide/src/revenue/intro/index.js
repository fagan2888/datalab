import { initChart } from '../../spending/intro/init';
import colors from '../../globalSass/colors.scss';
import revenueData from '../../../../assets/ffg/data/federal_revenue_gdp.csv';
import { findAmountInCsv } from '../../../src/utils';
import Mapping from "../../../../_data/object_mapping.yml";

(function init(){
    const config = {
        anecdoteName: 'anecdote.svg',
        comparisonAmount: findAmountInCsv('federal spending', revenueData),
        compareString: 'spending',
        gdpAmount: findAmountInCsv('gdp', revenueData), 
        gdpPercent: findAmountInCsv('federal revenue percent of gdp', revenueData) * 100, 
        sectionAmount: findAmountInCsv('federal revenue', revenueData), 
        comparisonColor: colors.colorSpendingPrimary,
        sectionColor: colors.revenuePrimary,
        accessibilityAttrs : {
            default: {
                title: '2019 Federal Revenue',
                desc: 'The image illustrates federal revenue in 2019 using dots, and each dot is equal to a billion dollars. There are 3,500 dots.'
            },
            gdp : {
                title: '2019 Federal Revenue and GDP',
                desc: 'The U.S. economy, as measured by gross domestic product, produced $21.3 trillion worth of goods and services. In 2019, federal revenue was equivalent to 16% of gross domestic product.'
            },
            spending : {
                title: '2019 Federal Revenue and Spending',
                desc: 'The image illustrates federal spending in 2019 using dots, and each dot is equal to a billion dollars. There are 4,400 dots. Due to rounding, there are 900 more spending dots than revenue dots, representing the deficit for 2019, $984 billion.'
            }
        }
    };
    initChart(config);
})();
