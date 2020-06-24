export interface RequestOptions {
  data?: any;
  files?: { content: Blob; fieldName: string }[];
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: { [name: string]: string };
  query?: { [name: string]: number | string | Array<string> };
}

export interface HttpResponse {
  parsedBody?: { [key: string]: any };
  headers: Headers;
  status: number;
}

export interface ResponseError {
  data?: Object;
  statusCode: number;
  type: 'ResponseError';
}
