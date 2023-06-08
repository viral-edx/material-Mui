import { Grid, Stack, Typography } from '@mui/material';
import AnalyticEcommerce from '../AnalyticEcommerce';
import MainCard from './MainCard';
import SalesColumnChart from './SalesColumnChart';
import { useState, useEffect } from 'react';
import PopularCard from './PopularCardS';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {/* row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
        </Grid>

        <Grid item xs={12} md={7} lg={8}>
          <MainCard>
            <Stack spacing={1.5} sx={{ mb: -12 }}>
              <Typography variant="h6">Net Profit</Typography>
              <Typography variant="h4">$1560</Typography>
            </Stack>
            <SalesColumnChart />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <PopularCard isLoading={isLoading} />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
