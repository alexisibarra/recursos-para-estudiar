import React, { FC } from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

import { ILinkMetadata } from "../Views/HistoriaDeChile/Utils/linksMetadata";

interface ISectionCardProps {
  title: string;
  content?: string[];
  linksMetadata?: ILinkMetadata[];
}

const SectionCard: FC<ISectionCardProps> = (props) => {
  const { title: sectionTitle, content, linksMetadata } = props;

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sectionTitle}
          </Typography>

          {content &&
            content.map((contentItem) => (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "10px" }}
              >
                {contentItem}
              </Typography>
            ))}
        </CardContent>
      </CardActionArea>

      {linksMetadata && linksMetadata.length > 0 && (
        <CardActions>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <List>
                <ListItem>
                  <ListItemText primary="Links" />
                </ListItem>

                {linksMetadata.map(({ title, url }) => (
                  <ListItem disablePadding>
                    <ListItemButton target="blank" component="a" href={url}>
                      <ListItemIcon>
                        <InsertLinkIcon />
                      </ListItemIcon>

                      <ListItemText color="primary" primary={title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </CardActions>
      )}
    </Card>
  );
};

export default SectionCard;
