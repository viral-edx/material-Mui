import { AvatarGroup, Badge, Box, CardContent, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/Divider';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { green, orange, pink, purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
const AvtarPage = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`
  }));

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Avatar
        </Typography>
        <Typography variant="h6" className="description">
          Avatars are found throughout material design with uses in everything from tables to dialog menus.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Simple Tooltips */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Vector avatars
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="data:image/png;base64,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"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="data:image/png;base64,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"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABFBSURBVHgB7VppjF33Vf/d/d5379tmeePxeBzXSxayOGmatDQpS1ApRW4lUKtW0AAVYVOFSqUiFQmBQAJa+JKqIJUPIPEBUD+UqGxCNFVT2sQJTZrFdhM3jrcZj8ezvf3dd3d+5//GloMElZ/fpB86Z3T9Vt93z/Y7v3POBXZlV3ZlV36IxcBbIIt7Zt4xOzv7e+VKqdtu95ZrtVrVtu1SFEVD/IBFw86JcejA/o9ZlvlBTdN+xvO8kuM4+cb6xusF8kW+1AvN+EYSDb8ShlHftfVza83uiRYFb6HshAG0wwcP/oJtGb9N5e+amZ72kzxDr9NFpVxGHMcYDkeON0wDlmmj2WrCNK3U8dwLURz/xaDZ+dri4cPnn3rqqRQ7LBNPgb17G+/d05j9Ur1auSVNE1ssbFgWsjRVipdphDzP1XezLIPFzyqVCgb9vm5b5hQj5ZjluL/S77bfX5uq9TY3t17FDsqkDaDVK9W/DgL/iFNyoZsm+r0eTF2Xj9Djc6aBUroocjA1lDEs24ZXKiGOYpiGARrCMQxjf54XH56bnXlv2Sudbrbbl3iSAhOWiRpgYWHuU3maPkZvG7ZpUVlbKSeKybWnaaZSwPd9lXwaDVPk1Kko4LouqLQyiM73TctExudZmi2WguCXy+XgAT+wnm23+01MUCZmACJ7rex7XzQMvSFKEuGVhx3HZZ6PfqagopIGrABKQXEnv6KMIMqblq0MIP9P0w0wHdAldhA09XJQvjVL8QHHdbvVavV0p9OZCD5MzADM7cWSZ/9uEAS2KJ8kifJ2ytw3mQqGYSrF5LV8VmIUiEGUSBDQEGIEsUjBw6AB5PsClJJGBs/h+149z5JjTKh3+5b9TGcw2MJNykQMsLBQnrYN918IavsDKuZLPm9HgSg8GIQq523bUd8Pw1DluqSHiABlwT9N01VEiEgayGuDjyyVKkpMYofFEMvS5KDtOr9YrXtfazZ7l3ETMhEDWJZ3jA77BAFOixjiOl+UaASLXktoCDlCvp8ksQJB8fxgMIBDA4iHVQRQwZxGyvlZwTRQwaGMUahqIeeQ89m2hYRG5TlKumY+YCXZl3txPMCYMhEDVColg9f5S1TClnDPsnzkfV64wwsuO0wBPUMWDzEMB0o5+UxSwZKw31Yy5es0YYqkCV+n/H4yMmASKwCVc8txNb0Mw9pDxHi53eudwJhiYgJSJPm8aZu+wZCVep9IuCLDkfkqbp2vo152VTinLP/DYYzNXojVzQE2mRrD1jpSGiTJBQd0SQRVFSBlErkylAJG3VJpIakkymfq/aGWFMVh3IRMxABJlt9bxImm2TpKLGcLZQfvPDyLasmhx4j4gvp81In8GsHwVl0AkSBHPSXsRd8wEYaYqPDW+IFlaMqIkh5DYkC728fS2hZeWVpHLypUGolB8jwJcRMykRTwHP0WkpufLwe+NhdQ+YPTCFwTOsObYco8txWASSXQ5SBGyMUTz4QCq7B2CZC+5yDwPQQkUY7NfBej6RpzX+dvGJir+dg/5aPbH6A9lOrC82jmYdv1/n0wZkWYiAF8XrFnmY9WfNe6Z95H3bdHdZ0XaFBBi4ewQk0pbowMoWuKCCnk334U1NOwXRWkLmqjMqnKJfsJCXuTkTFfc1WadaNcjFjXtDzpdPv/iTFExwTEzo1bXdPwavT6VMnC9Yy12C5ro5JfXPdClL2qvPam43pRBuJfIZcqHIF/JiPnzr0VuDSGxh+gXX5uHihhDJmIAXhhP+ExZOueeLV40+lHNX7kxZzVIRdPSpnLCwVouXq+fWy/zpWBilFpVK/z7XNcPRkZJpVfrHkw+KaWZ7VB1Z3DGDIRELT14ojNC/Is/VrYKkdqV70GpbhIwXKWi9nNQnlVgeFVKiRGKjJVRvOctT7LttF+ZCz5fHSMDFYrER909T9tM7fIsm58vjIRAzCM58QAAauAhKTYIGLNW2p1EOU0DJuigABXJrj5LgGRGCBeNQyhvNa18ygDSANE5Ul5aTVst87XWNH290aPtoCoohFFluokDWPIJAxAbMtqJaNgWCp3oBOlOHG5BWOb+na7m4izQtV1Qf4jC9O49+AeVR0s/r9RuBTXPN4JIyxvtEh4CsSMmIjESCLIpGUXazYcAqg0kZYuvymJVkRJYozFBidiAPb7XuBKSSqUozosUQ8emmNJcxXqM6LR6rKW90NEfNGoOGyRI1hUlv9QAV2BGwcoiuUtr7ZwcmlDpZN0koHLEkmMieIUL5zdwt37yrD4mfycBADN3mMZ7GAMmYgBGIqk6Abigo1LbiEv+ViJHWgZyx9xwDJHadCgIraWQmf4Z1RUcllVA2GAxYjvpwz9fXUXc9UFZTwppZZuqAhI0hhr7R42Wj3sqUgjlTGFhEIWwgHGIkQTwQCXDG/gNNAtyvBpgH31gLmuqZotCZuQ64Z09pWYPH7Yx5zDdlgunKFcUDHJAOkaJQLyTNp8aYsNhLpEytWSScAjvtTILjk1QE5jMGdU1PFvDQox3mID3H8/rBdeQF6xRuVLWN6hKYd5yfY1ZscXRwg5DZJyZjH3qzRIZHt4o1XgQJn1m7omoUyAcnjMZ7fg3JDvraVU0XRpJJt2yEaUmYG+yRRI2PiZVNVj9EhvYepSBvOLGFPGNsDHH7nj7fsa04+/7zbriZOnXqPPYpQ9dn1ICXp9XNwaIqWyq+stDLpddoQG9rJuT1dclC0aoWuiokfwzAjS9jTZDaVCagwX025BVtOFhI18Jmlgs8o1fFaPso+1noVLHZdX7yOzLjMC+pcwpoxtgGG/fazb1t9z4MCRhy12Lim9X7IF7LrYTC0ce/QxHH/mW/jYr/46Pvtnn8Vqs4UulbyNzK9eZXVguM+WIlUSxcUFPX05JP9nNOjDLlbZMS41h6S7maoctUoZb5v2MVMtYYqAG+culpvEElUStWWMKWMzQdfzDra7bVxaXdUyfZSzEupxquFDH3kU9xw9igvnzuLzj38eG1sthmuBcrWM6i13gFMAXjjzl4rNNmYxMzPDoYqNAbFCzxOsNPs4vR7hsU99Bj0phfw9f7qBqDyPy1tdGZSiQtptZBFKWTevV+zsdz74rocwhoxtgGq5rk/XZrB0iSFYSGvLXGWbOzdbw8qJp3HupecwP10j6IWc5dFrtQr27d2Lj//Gb6K+eBgOU6VWrcDnnqDk8yBREjCMeK63/+QxOJ6Nf/jHL7Gq5AiJJ8Owh09++tOYOnAbsSVVIzVNxmymUXzg3Xd9wXeK/zr24IGjuEEZOwVcx20a9FaPF6M5FkGJfmLOlzn8kPJ2+fVX8MDhfTh6YAEttq85vb3/4G0EOwNuqYyKwR2AqY8Godv83qRRHvjx9+Gh9zyMbz7zNC6tLJNLBGSRNvY29pAImXjg3vvw0vE2S64xIlYEiCyOKpeWLtKo1r0808s3osfYBmA7u2oII5OejvW/aqZcfHRRWpwnMqdqqiv5XfIN1GtV5d08bOHr//ZPOHvyeSx4FncBJX7PVHFocnQWGDnT5g0c2FPFI+98B5qb60wNToNlrEZS9fKTT6C9tYHZ2QYud2NoKasMCfDqlSscy1URtYdt3KCMbYBCK1ZNDjukx5eRFlMS2WAV57b24p63zbMa0DvS6BDB5TsESmy0B3jx1EnUWSa5Q1CREg16qgeQkJ4JLHzv7Gs4PxNgD8FuvnYLVHiQK0gnmUQhN0g+qbCD166cg520sS7pQEpdr9dxaunVl3CDMrYB0ii8ZJSDzHMcYysqFJ2tGila50/gWebr4vxezNSrDEuSpDDGuTNLuMwwbZghaayuwKffaSGWNZmwvCQj5XURtLp45cxF/NSD98ExddUV5tttsWqZWUWWmwNsrZyFLZ0jre+7HjtM7fJTr7Uu4AZlbAOcvrB28u6D1kbJsedWegPF5T1ugXKCnt69iOXeBs5rtiIrrqXB1TLsd0l/OftzmdNJHKI8PQvb9ZVnu701boJ8LNQdLG2t4KtPx3jwvvvRmApYGjU1Q4hZRs+srODs6VOY0VpYV30UaTZTKY2zJzHG7nBsA/zzi0uXZyrO35C+f6I3TKpJRghirtbI9/uc9vrk/DL6kkMuS8bdOr1dn5pGq31F5b1H9LfdgHgiLTGHnf0ealMz7AfaRP8Wvv38ccRkgy4NIyO0NOIuIWqioQ3Qk91CLPNIR0bveasbfQVjyM1Q4eJvv3Hm9/n4uf0Lc5vt2DCnyM+DoMKS5tFbsggdtegGgSwISqwcLHWMiJiNUKvdgkPlXa+vOsPN5pZapigsmJrC5lYTM0V3+71E4URG5tjP+yyLoUqJVpzj0Kwv88HVjUHrOYwhN9sMSch1oig+daGTHp2rxLAdbnAKS+W4jME3BhkXnDE9mLIfiDk2J7/Xy+gOt/Cdl15UKC8AV/JKRPc5NQ2SKfHMTF2t04cEyWGxPULjOWVCbBAE+yHba567yhnk2ubGF/7+qTNjscGJdINxmnxrZaN19LTXwO1mwpDU0GZ4nl4hU9zYYueWqrG32g/wkCmxaUxxkFVVba5G+lvSS2heYXhcaam9gJDLOidM84EtZGc0RqdVY2JMpxtivZ+jHYYnli6t/6Fphl/HmDKRW2S4Gf5R1zGeJGkp1aoELXowjBKEgz7KnAVY7OCm5uZQkTkgQZAuJmrLgCPHkAaQWZFuWNsrs1SlSJuVI2QKTZNB3re/jnmWRWl/47CP1VaI5y72sLK2+blmt/8Z3IRM6h4hq14LjruWfb+jbnTQ1SBE6vzDty0g5iL0yZNLuPOuO3HkwCKmSX+NPJZSqja/UgUE5SMqPOTRIXN89fU3ODnysDLUUa4EXLNNocEVZJeG+S4ja3ltK+mFzQM89QpuQiaSApSkyPI/5krzywQsEwWXIPS8YdjsGSqYmavjwnoX//30szj9/HcYMQEq1Sps9ghyA4X0+ynrfcT5wdpWmwBIQGQKfOSRo6w2b7APiHDq/BV8V1blTKdevy+jsy/erPIikzIA2+DBf0yVy08Q+T8sRU3t9jnwbIUh9gQBHrp9HwcZZIfxaDwe9luktWsclmYqWmSDkPD5+mCI6XoN77//VlS5CrM4C5RUkLSQKElYTqMkPj+I0scxAZmYAShxXBR/REj/aS3VqlK3s0zHxY0OfmS+QgBL8K7b9yMdZvDZyHjS/nJT3M9iVUsiGub8xiYqjIKH7z7EqlBcwwFZlGT5tXuMsjwr/pTr97OYgEz0Jile3DpHX5zOaD9LhmYKSxOHO05JbY2iqKOWpB5Dvx6UsX9PA3tnpjHl+0yZgqWvhsMLVXq5A595f2K5h9WtlvK6HLIWZ8n8O0bbn0AmohOQid8nGCXpScex5YaJHxut+jRs9jn54Uir7hk0Qog+GV2kC5GJmCIDdNMBQoJij91ilAwUNpzv5Dh5cXP7zpJ0dPNEln87yopfY/7fcNf3f8lO3CtcDKP4Gc7JOa8olBHkzU3uBbqpqZYlIUP5CkdefTEAWd0Wyc5g0FXAOdA8fG8jxusrTaYI9wgcqlJ5Ymz2r5wZfrTf71/BBGUn7xX2amX/tyzL+nO/5Bmjdbmp7h1US1K5wWF7GyzdoCP3/3Aq1O0NVTWQMXk4jNg0EffT7PFyv/8Hy2PO/v8/2cm7xVPW9OPc7HBlVTxMRdUSUKhutn3bizyXW2DkYOooepskkbo/SDwfx9Em2+RHO4PBX3LtM9bu7/vJjt8uT3LzrKmbp9nM3EFi1OCjNlqNXz2ubn9HN0rJPUYspRkB76vxMP5obzj8JnZQdjIF3iRBEDQsXf8QGfAnTU0/pHLiOtneDGdZkh6P8+yvOr3wCb4dYYflLTPA9b/Z8P1GqGdHtMLcx6lZlcr39Vy7lGm9E7JWwA7cFL0ru7Iru7Iru7Iru7Ir/0v+B+mvsKQ48M2uAAAAAElFTkSuQmCC"
                    />
                  </Stack>
                </Grid>
              </CardContent>
            </Paper>

            {/* Positioned Tooltips */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Letter avatars
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  {' '}
                  <Avatar>H</Avatar>
                  <Avatar sx={{ bgcolor: orange }}>N</Avatar>
                  <Avatar sx={{ bgcolor: purple }}>OP</Avatar>
                </Grid>
              </CardContent>
            </Paper>

            {/* Triggers */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Sizes Avatar
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  {' '}
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Variable width */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Icon avatars
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: pink }}>
                    <PageviewIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: green }}>
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
              </CardContent>
            </Paper>

            {/* Interactive */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                Total avatars
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <AvatarGroup total={24}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                </Grid>
              </CardContent>
            </Paper>

            {/* Transitions */}
            <Paper root elevation rounded elevation0 className="demoPaper">
              <Typography variant="body1" title className="demoTypography">
                With badge
              </Typography>
              <DividerPage />
              <CardContent className="demoOutput">
                <Grid container spacing={2} className="gridCard">
                  <Stack direction="row" spacing={2}>
                    <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
                    >
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </Badge>
                  </Stack>
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default AvtarPage;
