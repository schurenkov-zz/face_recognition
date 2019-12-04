import { IPersonTimeSpans } from '../App/type';

export default interface IProps {
  persons: IPersonTimeSpans[];
  handlerShowMarks: (m: number[]) => void;
}
