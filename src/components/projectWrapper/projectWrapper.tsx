import React from "react";

import { Card, Grid, CardMedia, Box, Chip, Typography, CardContent, IconButton, CardActionArea, Dialog, DialogTitle, DialogContent } from '@mui/material';

import CloseIcon from "@mui/icons-material/Close";

interface ProjectWrapperProps {
    title: string;
    subtitle: string;
    imgURL?: string;
    keywords: string[];
    date: number;
    content: [isTitle: Boolean, text: string][];
}

function ProjectWrapper(props: ProjectWrapperProps){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    }

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

    return (
        <>
            <Grid item>
                <Card sx={{ minWidth: { xs: 300, md: 400, lg: 555 }, maxWidth: { xs: 300, md: 400, lg: 550 }}}>
                    <CardActionArea onClick={handleClickOpen}>
                        <Box sx={{ display: 'flex' }}>
                            <CardMedia 
                                component="img"
                                sx={{ minWidth: 92, maxWidth: 92, display: { xs: 'none', sm: 'block' }}}
                                image={props.imgURL ? props.imgURL : require("../../images/default-project.png")}
                                alt={props.title}
                                height="92"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">{props.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" component="div">{props.subtitle}</Typography>
                                </CardContent>
                            </Box>
                        </Box>
                    </CardActionArea>
                </Card>
            </Grid>
            <Dialog 
                fullWidth 
                maxWidth="lg" 
                open={open} 
                onClose={handleClose}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    {props.title}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={1}>
                        {props.keywords.map(key => {
                            return (
                                <Grid item key={key}>
                                    <Chip label={key} />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Typography component="div" variant="h6" sx={{marginTop: 2, marginBottom: 1}}>{props.subtitle}</Typography>
                    {props.content.map((element, index) => {
                        return <Typography key={index} sx={element[0] ? {marginTop: 1} : {marginLeft: 2}} variant={element[0] ? "h5" : "body1"}>{element[1]}</Typography>
                    })}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ProjectWrapper;