import PropTypes from 'prop-types';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import MainCard from './Default/MainCard';
import { TrendingDown, TrendingUp } from '@mui/icons-material';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ title, count, percentage, extra, isLoss }) => (
  <MainCard contentSX={{ p: 3 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" className="title-typography">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" className="count-typography">
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              icon={
                <>
                  {!isLoss && <TrendingUp style={{ fontSize: '0.75rem' }} />}
                  {isLoss && <TrendingDown style={{ fontSize: '0.75rem' }} />}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1, borderRadius: '3px' }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack>
    <Box sx={{ pt: 3 }}>
      <Typography variant="caption" color="#8c8c8c">
        You made an extra {extra} this year
      </Typography>
    </Box>
  </MainCard>
);

AnalyticEcommerce.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default AnalyticEcommerce;
