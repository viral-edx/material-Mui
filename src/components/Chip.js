import { EmojiEmotions, Favorite, PlayCircleFilled } from '@mui/icons-material';
import { Avatar, Box, CardContent, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import DividerPage from 'utils/Divider';

const ChipPage = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <>
      <Box>
        <Typography variant="h2" className="title">
          Chips
        </Typography>
        <Typography variant="h6" className="description">
          Chips are compact elements that represent an input, attribute, or action.
        </Typography>
      </Box>

      <Box className="demoBox">
        <Grid container className="demoGrid">
          {/* First Stack (Left Side) */}
          <Stack className="stack" spacing={2}>
            {/* Basic */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Basic
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Chip label="Default" />
                  <Chip label="Color" color="primary" />
                  <Chip label="Disabled" color="primary" disabled />
                  <Chip label="Clickable" onClick={handleClick} color="primary" />
                  <Chip label="Deletable" onDelete={handleDelete} color="primary" />
                  <Chip
                    avatar={
                      <Avatar
                        alt="Justin"
                        src="data:image/png;base64,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"
                      />
                    }
                    label="Avatar"
                    color="primary"
                  />
                </Grid>
              </CardContent>
            </Paper>

            {/* Deletable Icon */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Deletable Icon
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Chip label="Deletable" onDelete={handleDelete} color="error" />
                  <Chip label="Deletable" variant="outlined" onDelete={handleDelete} color="error" />
                </Grid>
              </CardContent>
            </Paper>

            {/* Size */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Size
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Chip label="Small" size="small" />
                  <Chip label="Medium" />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>

          {/* Right Stack (Right Side) */}
          <Stack className="stack" spacing={2}>
            {/* Outlined */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Outlined
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Chip label="Default" variant="outlined" />
                  <Chip label="Color" color="primary" variant="outlined" />
                  <Chip label="Disabled" color="primary" disabled variant="outlined" />
                  <Chip label="Clickable" onClick={handleClick} color="primary" variant="outlined" />
                  <Chip label="Deletable" onDelete={handleDelete} color="primary" variant="outlined" />
                  <Chip
                    avatar={
                      <Avatar
                        alt="Justin"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABJFSURBVHgB7Vt7cFz1df7u3Xv3rZV2Ja0tS5ZsS5aNbQzYGBIgmIBTXmkhSZOQhASSacpQ+legnbbpdPpgOlM67T+ddjplmknahJm2aWjTJLQFCgWS8DA25mEbGfyQrbd2te/H3bv39jtnJTd/tJloJduZsX/mAt69q/2d8zvnO9/5zpXx4PO+j4t4mbjI1yUH4Odk+U0XTj6D870sXOAlhpdf+gZiR56CVc1hNpBC5PbfQMfmPTgf64JGQHX6BKrf/UP0HP42Os06YpEg6icP4tSffRzTL/0DfOKzf44x+pxHgNdsoHriEIzMaQRGrkGoux/17BRqP34Cxhv/jGRHBAgE4BkG73UBA+juTCD+4l/Ae/0bQDQJp3crzBvuR6hnPVZ7GeeqDNbGfoTKwe/BOfI8mrUi6vUqOtYOobSQge9U0dfbi6bnIGgHeVmIhcKQjZSrFdh8zQpY8PhKo+GiUqujaobohF9B13WfwWquVY+A+vw4Gsxp943vML99WGIVEy0ei8CuF1DNz8FtNDHleejpTqFUKiMcCSMYDMI0TJimCY9nUnPqyBeLmJvLolAuMUgMpOYehd9wkNx7X+u7Zk8iEI7CSqTR7lpVBxRe+hb8l76GeikD13WQSCQQ4QaDYZ4yw9yngYGAjVOnTiGfz6mxhEFGgg+DKRCPxdGg05gLKNHoTDaLSCwGj8aXSiVMz82g+8lHYZ85CLN3GOFj/4Hy8E3ouO0RtLtWzQGz//lXCL7ydZRLRYTDERodR6VSw/x8Fo7boIE+elJp9Pb2IMITn5ubQ4FGNRyHLvDheg1oMvJfEvqlYgnRcBgucUGMl9ddv4kzs1MovPCPSHd3wzUsJG66BitZq+KAysxJOM8/zlAOoqOjkwZGGP4ewlZI87rO064yjycmzsCyAuhIxNHV1cn/t7GwsIBypcoo8BAwg4wQk3nfQMNt8vUapmdn0Gw2eX8XOmMd+l61VMV7zSq2/frfoGv7jVjJWhUHNIoZnlgORjMKgfFKpaKG2EEbIea2OMR1XVSrDk5PTGC9MQCJftsyEItHUF9w1AGlapmfCxAwCXrVKq8atmzZgnRPL4HShmEaUiQgaVMqFVCZegv+FR/W9LmgDigffgGWaSFXKKHOkK7VaujiKSc6Enri8l6IyC4OqDESisU8wzvKk6UpnqFO8ogDTZ66U3dQZBrJZ7eMbIZlB+gshn/TITbQAZIn/MeyuPX938LE3Bn0f/5P6IT2KM2KHVBbmMbcs48zD6rMUZclzEbCjiPD0K7SEalUCiGGeoCvy3t1gqOUNTHc9z3UGdKC+or+HrQqmDzndHcPHL4nzlQypEDZwgc5bzG4wQ84h76L2Y27seZD96CdtWIHTP7X36OyMMf8hZ6+71cQj8eRogGFQh4LuTy6OjtbX8aUqNSqcBwSHr+qJ+ny1CW0pTpI6Ev6rFu3FmXe1yw3GSWuFAUaLSfvqQPEIS7DZ9EVKH3799G956OwCLzn3QE1hmCtXmM+Wyx5YXVCPp9nCHcw96PIFwqav0Eab0op1M031BgxIkDjbYKlpHGVJCgUtskBHD193sKySCcQPyQ8DJbDpn7OU5D1JGQgziuhcGw/UpffhOWuFTvA5cYrDFspbbLjSDTKPJY8l3IYZmgbyLEKxFjPrWBIN+2S3TlMF5dGiqMExOT05bQDTJcKAdBfxAQBR00Rfk+DjnBZUj1yBZ9/D5gBXsItyBYnjl4YB8TSQ4hGI3qqDg/WYM6GifpSu5uVMjdqaJg7fFPYnkuDiuWKOiLK+wwaUSlXGfp0IitCg/cJf/AY91I5zhL1n2yMfDl3Q/8uDhIHzj/zOAZufQBYZkVYsQNCzP2BgXVaq3O5HDdf5Sla6IyGsH10BJcNb0InGWGxWFZgPD0zjbH3x1FhmBvcfI69gYS8AKScrtNw1XCJBgFJ4h6NbFktWCFp0cp8Q9PCZwSoE8rzyI+9is4t1y5r/yt2QP6Np+iEAOJsZkI0IjOfQTIWxsNfvhfD6wcQtkOwQ6GzVaBJtHQd1nye8nvvH8d7J0+htsj2qnSeyfelVNYZSbVqXbtJiYjx6RlM0oFMBuUY4owWlYYySU9So5LHcteKHOA16iifPopgLKgGCsht7l+LB+65C72kqrpRSy7ZrMX3ba3rJIzsE6JE+17svf5anC3hWu1aGNFwamiQE9SYGlPTU5iYnMIrbx3Gv//oAPLkE5axRIpa0SCgGUj1YblrxRHQJBoJOCkec1O33LBLSZBNwwnaSoIsgyzONrUrNA1D2Z5aLRYEWiao9fJ/vslWmNVCmR+7Q7bFg4ygdDqNkU2bsGvHNvzlE0/izPyCVgVj8Xv9rn4kBndguWtFipDJ8A5u3KW0VfI3TpAbHRxUtqYgBekAA606L8YolTWUxPxfWCWvGS2LNLzlWqK5Jn9OMBTElk1DeOBTd2JtqlsZ5NKHElfcvmwAXLEDZCXWDmpHVy6XsXPrKGyGfZPUtQlvcW8EqsDS18hx+wpuiugSxnqp+Yr48nrrc8aiU+g8fzFCpFMk4K3v68OmdWmsYWeZkKaKjhjcdx/aWStPgVIOyVQSKdbzdem4GmF4Zou3yw3yAsugp4DVKmum36KywvH9nzw0wQCp+yyBcvktj6Bp+FhKeOEHPt8bGOjB/FgVXbEoU5CdZ3oQ7awVO8AnixPEppqBzo4YWpgMrf8lgtXcVIa0tt4SPHjP0Pr16OJ9pukp9//fIFys84tAKM2RKEcuabM4RYkR66FcAjjdXSk65bTeJ5Kazx4DoSiWu1bsAM8Ma7myGOZBApYYWmA5e/qVgzgxPokGj1hSQGs1/0S52S/fczcG+9edNXypssuqEfmfe/kVjJ2kxlBrEExt9PX0YHR4CD3RIKkxeQIjoJtVRCLBoZM8gnBtfgJ2rAvLXSuPACEn/NPDsuc1Rcqq4cCRMXSvXYcdW7ciGY8qABbY4k7MzaJadlje6iixRwiwVW4BotEKdZ7uyfFxvPjya+qWZGdS6/7YyXEcfPttjG4YwJ4dWzVSAob0BS3tsMafB/MCtcOBIPk+t7llqI8nIvQ2hDtv/pAqu6xT6hyDIZ0gXV7bk0Kz0dDDLlETEBQX7iAviPHSA4h2+Nk79/G9cIvsCEjSuIV8Aa8fOowDb76NHVtGFE5d0mYx3mGURUnJL4gDOoa2IUAdP81mh5VfT1XKlwgWlkUD9ZQN7eikH2igpQPIEt5vmK6edpNAJnMBm0QpaEfVMaISixMEA9LJLvzC3muRzWSJDSRCZJ/CkaVR6rvxXgTayP8VOWBkYT96zDK+yS4sKlEgqB4QmkrGx81ZJDKiAolxAmriFJW1KGxK47QkashSCqSkxtKICZJfSCcpzpTlqvMc5RsdRP1MpqrOCtJZEjnp6z6BdldbDrAm38KVM9/BMBud6cgpvKq1vNWsWNKc0OAfH3oL45MzWMjmsL5/PfbsHCVwJZQBWsoLDHWaVAstjQYds+iUEI23bKuFD/LHNtVhwje0uC4KKTG23oZdRnK0fWW4LQcMVY5henICWYLaJ2+7FccOH9NcFaZXpxVPv/wWbv/cF3Dgbx/HXQ98Bfs+cgeu3LQWv/bpO7B7x+XK48VAOWmRkkTccMj9F0VCnSKNT2Tx5tExVOsNDPStw66dl2mE+VhqibXYIrHxCsWhdldb0BkLetiwYVCIO46fGFMQlBAXodNif/yxez6laP/fzzyHT3/2ftS42elcBa8dPoEzk5PUAR2VxEU8kcsmGMrJenSEcIZv/utTyHYN4s//6Vl8/fsv4IeHj+K5d8/g5PS8ppPaz52XKZ9dN9KPB+e/hs3j30c7qy0HGHYEndT50r1pHD9+gohta1kKh0NkhAlECxmk7CaG+pIo5TJkfga2sUpcf8vtqEQ6FMREMwgRuKLROP8b1sogBr05PoVjvL7yyFdxfHoOYyRSFU6JfulzX8LJmQzBcikCTHTw++798BWYO/0uuo78m47al7vaSoHj1Tj2Rm1FbIGpVHdSQUwAUEqWxcjo8ir46z/9Y871ypify1EYTaAj2Usll/OBKTqNHZ4puS1NoehddFKNxt32+Qfx2qGDcN45plG1lp3l0PohBNwK9u29HvnJcWoHVITZfA2sW4NZaZVPn0aSh9GsV2BFE8uypS0H5Hq3wXTeVo1PkH3tmnSrc1ORYlGnYz5L+UsxxNcMdy0ONWTa6yGU7D5LfiT/hdjYjIKR4Y2IzY7hdx56EPfdPYtxjs+G0r1IUCrzxo/AqpdVY5C1JLPNUigZGR5BxYojEDlPqrAZ60Ymz5E2Q196d0E+QWkVMhjeAmi2EBltiFtKsIy7pbZ7HHAIY5T2WS4hS5L74hBRlFj9NY2So3FsHxlSqU0uUXyg4qi5WAUaLL9BdJMfpBhdZ4z+toYjbTlAwvx9P41rI3WdAWSY85KZMsiU2Z1o+2FpUoTpyVdQEWoa1PnI3evk+lWqPDL9FaVYjKrzJG2qRbY4KOKqKCJO0o5Qep9mc1EjbLXD0gtIxRnuX6NqtEhuJ8PLF0Nkta0HHA5tUmM7OuJqWGtzLSVX5eymqycnHZ0OO1nDhbqKFD7L8imKcA+HJ8lkSgWUbDajn5fRmN4rn3d9/ax0mzIzkClRnVVCfoZEWie/O0ZiVKQ2PxXegHZW2w7IJrfi2XEHE2UOKuteqytjKEtoikPECa1JTxlFNj5lET0JiDItmp6a0i5PUkK0xCDzf3KK5ZEDFpcOcDgUdWuO9g2uDEmc1kxRnSPiJ6NAnNRJDUKmxgfNDfCjSbSz2qbCIocd+eBvMzfr6Jz7PWr90+jkOEv0viDBUU7QaEq76qhuGAm12J1ESi5XwP4DB7GWBEfSaYZSebFQZFqU2e4u1vlFoiPDD39xmCLRoEMVYYTEjO50Dyp0/jvd7T9RtuJmyKQgUukeRu7MMXSVYqzvQQRlQoIWUs9nszrtkXwXWVx0/FGywaPvHsXxV19V8IxGY9i2/TJKaYbOCOR0xdhQyEaUjltSiTQd6NAiHRUkXZaHSZ6pr4fb0Y9216qMx52BXSgf/x7msnmNDJMkp1K3SWzKnA0WNcR95fi+tsnxeAJX77mGw5KCDkJisbgOQKoyEGXk1Nj0VJgyceZ3gNNlQVhJJ8EAmR4XOCc4etVDOEKg9Ub3of2nA1bJAUbfNmR9sjrmrsXwrjFPRaiUMO2gXrh//yGUmb8Cej5TJsLy2SEgSFkrRP1gmi2udncyQJVRWaOmo/VisUJnBrV5cil8lFhdZnjvZLAXge23ntWSVrJWxQEmKW358l9G5Y2/Q1CcINSYG5cZYTrVi6t27sQXv/oYUqzZW0Y3Y9PGDeiLJTGd92BRN2zSOVmmyiT7hJlZUY2K+K0vfgYO2+ZsXqY9vqpI2YUsI6qC4sgtq/aE56o9JOVtvwML7zzJGV2RDrAUCC0VQ4DLNm/C3Td/ED947oc4eOA1vPH6fsikvyFzPg5OAtoINfWZQBE57/3YrRjdOoITlMKK/HnyqIykU6nCqXOwE96VH//5c4BEQe72R2E++RDCxRLCzHspa1LDS2QzX/jFfYhwRpDNLMDl3wssjUV5+sNr6QIeQWB8roAbdu/Er37yDjZAFVWTRDmWBypKxSqKpRpm99wPK9GL1Vqr+pyg1bMRs9c9DO+Fx3TzgvpBeTyGDQ25ID7KKBh7d0xV5M5IVHlD3fUU1U+T99/ygd24/gNXUxuskO35Z4FPwFIelpwc3AvrqruwmmvVnxQNb78FC8EIgi8+xkYpR7IjI21SXZY/qeGjIyPaNTZJnJoqftR0+nvV1VfwtCl5Uwyp1ix9jmhhIa8j9zniwFTfjTA/8nBb46+fts7Jw9L25uswHfoDeE//rhopTVGYcz1ZC7kFFTSl9EXJ4w1BeK+VEqIRRCIWMtkFDlVqBL0cR+IFzO9+APauu9t+EuynLeNc/s6QN3scnc/+ETZGG9q1yYPRTYqi1XIV5WpZHvxiO9zSA2RqFAoFtazlKYHP54uY9BKo3vwIrP72Gp2fZRnn+pemmrUywv/ym9gazqsoos8E6gywubQF5Qsib0v/IF3iVKaAqa2fgHH1PTCsc/tEv3E+fmtMSI51+AdIvfkE+uJBVY5Ns4X+rX6s9eRYJlfEma7tqF/7JdjpjTgfyzifvzbnltgXzByGOXcCZnEatlNis8NGh0ygmdwId3A3fLLKc5Hr/98yLv3e4EW+LjkAF/m65ABc5OuSA3CRr/8Bn7pdtlx+VWsAAAAASUVORK5CYII="
                      />
                    }
                    label="Avatar"
                    color="primary"
                    variant="outlined"
                  />
                </Grid>
              </CardContent>
            </Paper>

            {/* Avatar & Icon */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Avatar & Icon
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Chip color="secondary" variant="light" icon={<PlayCircleFilled />} label="Play" />
                  <Chip
                    color="primary"
                    avatar={
                      <Avatar
                        alt="Justin"
                        src="data:image/png;base64,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"
                      />
                    }
                    label="Avatar"
                  />
                  <Chip color="warning" variant="outlined" icon={<EmojiEmotions />} label="Smile" />
                  <Chip icon={<Favorite />} color="error" label="Like" />
                </Grid>
              </CardContent>
            </Paper>

            {/* Color */}
            <Paper root rounded className="demo-paper">
              <Typography variant="body1" title className="demo-typography">
                Color
              </Typography>
              <DividerPage />
              <CardContent className="demo-output">
                <Grid container spacing={2} className="grid-card">
                  <Chip label="Primary" color="primary" />
                  <Chip label="Secondary" color="secondary" />
                  <Chip label="Success" color="success" />
                  <Chip label="Info" color="info" />
                  <Chip label="Warning" color="warning" />
                  <Chip label="Error" color="error" />
                </Grid>
              </CardContent>
            </Paper>
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default ChipPage;
