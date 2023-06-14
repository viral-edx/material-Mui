import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import chartData from './Bajaj-area-chart';

// project imports

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const { navType } = customization;

  const borderColorOfGraph = '#718125';

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [borderColorOfGraph],
      tooltip: {
        theme: 'light'
      }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, [navType, borderColorOfGraph]);

  return (
    <Card className="bajajAreaChartCard">
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: theme.palette.grey[800] }}>
                Bajaj Finery
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                $1839.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      <Chart {...chartData} />
    </Card>
  );
};

export default BajajAreaChartCard;
