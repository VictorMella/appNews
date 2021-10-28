import { ISource } from "./sourde.interface"

export interface INoticias {
  author:      string;
  content:     string;
  description: string;
  publishedAt: Date;
  source:      ISource;
  title:       string;
  url2:        string;
  urlToImage:  string;
}

