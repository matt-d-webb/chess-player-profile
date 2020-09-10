// @flow

import * as React from "react";

import {
  Page,
  Grid,
  Card,
  colors,
  Profile,
  Icon,
  StampCard
} from "tabler-react";

import C3Chart from "react-c3js";

function Home() {
  return (
    <div>
      <Page.Content>
        <Grid.Row cards={true}>
          <Grid.Col offsetLg={3} offsetSm={1} md={10} lg={4}>
            <Card>
              <Card.Header>
                <Card.Title>FIDE Profile</Card.Title>
              </Card.Header>
              <Card.Body>

                <Profile
                  name="Matthew D. Webb"
                  backgroundURL="img/nyc.jpg"
                  avatarURL="img/matthew-d-webb.png"
                >
                  <Grid.Row>
                  <Grid.Col><StampCard header="2254" footer="Standard" color="blue" icon="bar-chart" /></Grid.Col>
                  <Grid.Col><StampCard header="2201" footer="Rapid" color="green" icon="bar-chart" /></Grid.Col>
                  </Grid.Row>
                  
                  <C3Chart
                    style={{ height: "12rem" }}
                    data={{
                      columns: [
                        // each columns data
                        ["data1", 78],
                        ["data2", 43],
                        ["data3", 63],
                      ],
                      type: "pie", // default type of chart
                      colors: {
                        data1: colors["green"],
                        data2: colors["orange"],
                        data3: colors["red"],
                      },
                      names: {
                        // name of each serie
                        data1: "Wins",
                        data2: "Draws",
                        data3: "Loses",
                      },
                    }}
                    legend={{
                      show: true, //hide legend
                    }}
                    padding={{
                      bottom: 0,
                      top: 0,
                    }}
                  />
                  <C3Chart
                    style={{ height: "10rem" }}
                    data={{
                      columns: [
                        // each columns data
                        [
                          "data1",
                          0,
                          5,
                          1,
                          2,
                          7,
                          11,
                          6,
                          8,
                          24,
                          7,
                          12,
                          5,
                          6,
                          3,
                          2,
                          2,
                          6,
                          30,
                          10,
                          10,
                          15,
                          14,
                          47,
                          65,
                          55,
                        ],
                        [
                          "data2",
                          0,
                          5,
                          1,
                          2,
                          7,
                          5,
                          6,
                          8,
                          24,
                          7,
                          12,
                          5,
                          20,
                          3,
                          2,
                          2,
                          6,
                          30,
                          10,
                          10,
                          15,
                          14,
                          47,
                          65,
                          61,
                        ],
                      ],
                      type: "area", // default type of chart
                      groups: [["data1", "data2"]],
                      colors: {
                        data1: colors["blue"],
                        data2: colors["green"],
                      },
                      names: {
                        // name of each serie
                        data1: "Standard",
                        data2: "Rapid",
                      },
                    }}
                    axis={{
                      y: {
                        padding: {
                          bottom: 0,
                        },
                        show: false,
                        tick: {
                          outer: false,
                        },
                      },
                      x: {
                        padding: {
                          left: 0,
                          right: 0,
                        },
                        show: false,
                      },
                    }}
                    legend={{
                      position: "inset",
                      padding: 0,
                      inset: {
                        anchor: "top-left",
                        x: 20,
                        y: 8,
                        step: 10,
                      },
                    }}
                    tooltip={{
                      format: {
                        title: function (x) {
                          return "";
                        },
                      },
                    }}
                    padding={{
                      bottom: 0,
                      left: -1,
                      right: -1,
                    }}
                    point={{
                      show: false,
                    }}
                  />
                  <br />

                </Profile>
              </Card.Body>

            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </div>
  );
}

export default Home;
