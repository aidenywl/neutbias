import queryString from 'query-string';

export interface RequestOptions {
  data?: any;
  files?: { content: Blob; fieldName: string }[];
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: { [name: string]: string };
  query?: { [name: string]: number | string | Array<string> };
}

export interface HttpResponse<T> {
  parsedBody?: T;
  headers: Headers;
  status: number;
}

export interface ResponseError {
  data?: Object;
  statusCode: number;
  type: 'ResponseError';
}

export async function sendRequest<T>(
  url: string,
  options: RequestOptions,
): Promise<HttpResponse<T>> {
  const { data, files, headers } = options;
  let response;
  // If there are files, then it's a multipart/form-data and special encoding is needed.
  if (files) {
    const { method = 'POST' } = options;
    const formData = new FormData();
    for (const field in data) {
      if (typeof data[field] === 'object') {
        throw {
          statusCode: 400,
          type: 'ResponseError',
          message: 'sendRequest data object for FormData should not have object.',
        };
      } else {
        formData.append(field, data[field]);
      }
    }
    files.forEach((file) => {
      formData.append(file.fieldName, file.content);
    });
    response = await fetch(url, {
      body: formData,
      headers,
      method,
    });
  } else {
    const { method = 'GET', query } = options;
    // Converts the object's key and value data into a string for a GET query.
    // e.g. querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
    // Returns 'foo=bar&baz=qux&baz=quux&corge='
    const qs = query ? `?${queryString.stringify(query)}` : '';
    response = await fetch(`${url}${qs}`, {
      body: data ? JSON.stringify(data) : null,
      credentials: 'include',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      method,
    });
  }
  if (response.ok) {
    const parsedBody = await response.json();
    console.log('the body is: ', parsedBody);
    const parsedResponse = {
      parsedBody,
      headers: response.headers,
      status: response.status,
    };
    return parsedResponse;
  } else {
    let body = {};
    try {
      body = await response.json();
    } catch (error) {
      // parsing response fails. Don't do anything special.
    }
    throw {
      statusText: response.statusText,
      statusCode: response.status,
      type: 'ResponseError',
    };
  }
}
