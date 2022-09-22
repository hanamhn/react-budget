import React from "react";
import { Grid, Segment, Statistic } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = () => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="tiny" color="green">
              <DisplayBalance
                title="Incomming:"
                value="1,045.50"
                color="green"
              />
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic size="tiny" color="red">
              <DisplayBalance title="Expenses:" value="623.50" color="red" />
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
