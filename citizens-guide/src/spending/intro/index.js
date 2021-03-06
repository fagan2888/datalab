import {initChart} from './init';
import colors from '../../globalSass/colors.scss';
import SpendingData from '../../../../assets/ffg/data/federal_spending_gdp.csv';
import { findAmountInCsv } from '../../../src/utils';
import Mapping from "../../../../_data/object_mapping.yml";

(function init(){
    const config = {
        anecdoteName: 'anecdote-spending.svg',
        comparisonAmount: findAmountInCsv('federal revenue', SpendingData), 
        compareString: 'revenue',
        gdpAmount: findAmountInCsv('gdp', SpendingData), 
        gdpPercent: findAmountInCsv('federal spending percent of gdp', SpendingData) * 100, 
        sectionAmount: findAmountInCsv('federal spending', SpendingData), 
        comparisonColor: colors.revenuePrimary,
        sectionColor: colors.colorSpendingPrimary,
        accessibilityAttrs : {
            default: {
                title: '2019 Federal Spending',
                desc: 'The image illustrates federal spending in 2019 using dots, and each dot is equal to a billion dollars. There are 4,400 dots.'
            },
            gdp : {
                title: '2019 Federal Spending and GDP',
                desc: 'The U.S. economy, as measured by gross domestic product, produced $21.3 trillion worth of goods and services. In 2019, federal spending was equivalent to 21% of gross domestic product.'
            },
            revenue : {
                title: '2019 Federal Spending and Revenue',
                desc: 'The image illustrates federal revenue in 2019 using dots, and each dot is equal to a billion dollars. There are 3,500 dots. Due to rounding, there are 900 more spending dots than revenue dots, representing the deficit for 2019, $984 billion. '
            }
        }
    };
    initChart(config);
})();
