// import { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import AnalyticEcommerce from '../AnalyticEcommerce';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {

  return (
    // <>
    //   <Grid container spacing={gridSpacing}>
    //     <Grid item xs={12}>
    //       <Grid container spacing={gridSpacing}>
    //         <Grid item lg={4} md={6} sm={6} xs={12}>
    //           <EarningCard isLoading={isLoading} />
    //         </Grid>
    //         <Grid item lg={4} md={6} sm={6} xs={12}>
    //           <TotalOrderLineChartCard isLoading={isLoading} />
    //         </Grid>
    //         <Grid item lg={4} md={12} sm={12} xs={12}>
    //           <Grid container spacing={gridSpacing}>
    //             <Grid item sm={6} xs={12} md={6} lg={12}>
    //               <TotalIncomeDarkCard isLoading={isLoading} />
    //             </Grid>
    //             <Grid item sm={6} xs={12} md={6} lg={12}>
    //               <TotalIncomeLightCard isLoading={isLoading} />
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Grid container spacing={gridSpacing}>
    //         <Grid item xs={12} md={8}>
    //           <TotalGrowthBarChart isLoading={isLoading} />
    //         </Grid>
    //         <Grid item xs={12} md={4}>
    //           <PopularCard isLoading={isLoading} />
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </>

    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
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
    </Grid>
  );
};

export default Dashboard;
