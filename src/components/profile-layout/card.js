import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function SimpleCard() {
  return (
    <Card style={{ width: 350, height: 350, marginRight: 40, marginLeft: 40 }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Lorem Ipsum Dolor
        </Typography>

        <Typography color="textSecondary">Maicon Lourenço</Typography>
        <Typography variant="body2" component="p">
          Um Texto grande, tão grande que precisa de 3 pontos no final
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
}
