import { ResponsiveLine } from '@nivo/line';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }: any) => (
  <ResponsiveLine
    // interpolation={'linear'}
    data={data}
    animate={true} // Enable animation
    motionConfig="gentle"
    enableSlices="x"
    margin={{ top: 50, right: 110, bottom: 100, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 90,
      legend: 'Date',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Sentiment',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    curve="monotoneX"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export const data = [
  {
    id: 'japan',
    color: 'hsl(110, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 35,
      },
      {
        x: 'helicopter',
        y: 88,
      },
      {
        x: 'boat',
        y: 285,
      },
      {
        x: 'train',
        y: 228,
      },
      {
        x: 'subway',
        y: 91,
      },
      {
        x: 'bus',
        y: 268,
      },
      {
        x: 'car',
        y: 144,
      },
      {
        x: 'moto',
        y: 197,
      },
      {
        x: 'bicycle',
        y: 228,
      },
      {
        x: 'horse',
        y: 293,
      },
      {
        x: 'skateboard',
        y: 170,
      },
      {
        x: 'others',
        y: 244,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(328, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 256,
      },
      {
        x: 'helicopter',
        y: 243,
      },
      {
        x: 'boat',
        y: 27,
      },
      {
        x: 'train',
        y: 154,
      },
      {
        x: 'subway',
        y: 47,
      },
      {
        x: 'bus',
        y: 188,
      },
      {
        x: 'car',
        y: 115,
      },
      {
        x: 'moto',
        y: 8,
      },
      {
        x: 'bicycle',
        y: 224,
      },
      {
        x: 'horse',
        y: 291,
      },
      {
        x: 'skateboard',
        y: 220,
      },
      {
        x: 'others',
        y: 7,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(107, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 274,
      },
      {
        x: 'helicopter',
        y: 272,
      },
      {
        x: 'boat',
        y: 138,
      },
      {
        x: 'train',
        y: 57,
      },
      {
        x: 'subway',
        y: 228,
      },
      {
        x: 'bus',
        y: 183,
      },
      {
        x: 'car',
        y: 131,
      },
      {
        x: 'moto',
        y: 252,
      },
      {
        x: 'bicycle',
        y: 264,
      },
      {
        x: 'horse',
        y: 88,
      },
      {
        x: 'skateboard',
        y: 79,
      },
      {
        x: 'others',
        y: 5,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(222, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 161,
      },
      {
        x: 'helicopter',
        y: 59,
      },
      {
        x: 'boat',
        y: 268,
      },
      {
        x: 'train',
        y: 8,
      },
      {
        x: 'subway',
        y: 225,
      },
      {
        x: 'bus',
        y: 52,
      },
      {
        x: 'car',
        y: 239,
      },
      {
        x: 'moto',
        y: 240,
      },
      {
        x: 'bicycle',
        y: 231,
      },
      {
        x: 'horse',
        y: 57,
      },
      {
        x: 'skateboard',
        y: 85,
      },
      {
        x: 'others',
        y: 52,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(57, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 249,
      },
      {
        x: 'helicopter',
        y: 150,
      },
      {
        x: 'boat',
        y: 165,
      },
      {
        x: 'train',
        y: 284,
      },
      {
        x: 'subway',
        y: 238,
      },
      {
        x: 'bus',
        y: 236,
      },
      {
        x: 'car',
        y: 199,
      },
      {
        x: 'moto',
        y: 254,
      },
      {
        x: 'bicycle',
        y: 290,
      },
      {
        x: 'horse',
        y: 21,
      },
      {
        x: 'skateboard',
        y: 40,
      },
      {
        x: 'others',
        y: 119,
      },
    ],
  },
];

export default MyResponsiveLine;
