export interface IPersonTimeSpans {
  PersonIndex: number;
  TimeSpans: number[];
}

export interface ILabel {
  Name: string;
  TimeSpans: number[];
}

export interface IBoundingBox {
  Height: number;
  Left: number;
  Top: number;
  Width: number;
}

export interface ILandmark {
  Type: {
    Value: string;
  };
  X: number;
  Y: number;
}

export interface ITimestamp {
  BoundingBox: IBoundingBox;
  Face: {
    BoundingBox: IBoundingBox;
    Landmarks: ILandmark[];
  };
  Index: number;
}

export interface ITimestamps {
  [key: string]: ITimestamp[];
}

export interface IPersonsUrl {
  Timestamps: ITimestamps;
  FrameStep: number;
  PersonTimeSpans: IPersonTimeSpans[];
}
