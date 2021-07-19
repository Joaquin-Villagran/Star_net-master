import React from "react";
import "./Footer.css";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Acerca de" />
              <List link inverted>
                <List.Item as="a">Mapa del sitio</List.Item>
                <List.Item as="a"><a href="https://www.instagram.com/quinvillagran/">Contactenos</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Servicios" />
              <List link inverted>
                <List.Item as="a">Error en la compra</List.Item>
                <List.Item as="a">FAQ</List.Item>
                <List.Item as="a">Como acceder</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Tienda Online
              </Header>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ex voluptate harum, voluptas architecto consequuntur vero accusamus fugiat tempore aperiam earum repellat a repudiandae at enim saepe. Quasi, reprehenderit sunt.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
