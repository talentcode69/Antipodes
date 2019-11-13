import React from "react";
import { Container, Segment } from "semantic-ui-react";

export default function BandsInTown() {
  return (
    <Container>
      {/* <h1>Events</h1>/ */}
      <Segment>
        <a
          className="bit-widget-initializer"
          data-artist-name="Antipodes"
          data-display-local-dates="false"
          data-display-past-dates="true"
          data-auto-style="false"
          data-text-color="#000000"
          data-link-color="#3585AB"
          data-background-color="rgba(0,0,0,0)"
          data-display-limit="15"
          data-link-text-color="#FFFFFF"
          data-display-lineup="false"
          data-display-play-my-city="true"
          data-separator-color="rgba(124,124,124,0.25)"
        />
      </Segment>
    </Container>
  );
}
