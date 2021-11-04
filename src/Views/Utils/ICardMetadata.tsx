import { ILinkMetadata } from "./ILinkMetadata";

export interface ICardMetadata {
  title: string;
  links?: ILinkMetadata[];
  content?: string[];
}
