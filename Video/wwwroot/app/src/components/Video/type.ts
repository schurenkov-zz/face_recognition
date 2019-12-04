import { IPersonsUrl } from '../App/type';

export default interface IProps {
  personsUrl: IPersonsUrl;
  marks: number[];
}

export interface IStyles {
  Height: number;
  Width: number;
  Left: number;
  Top: number;
  X?: number;
  Y?: number;
}
