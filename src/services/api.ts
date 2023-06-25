async function request(
  endpoint: string,
  options: ReturnType<typeof getOptions>
) {
  let url;
  try {
    new URL(endpoint);
    url = endpoint;
  } catch {
    url = (process.env.API_URL || "http://127.0.0.1:8080") + endpoint;
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message);
  }

  try {
    return await res.json();
  } catch (err) {
    return res;
  }
}

function getOptions<BodyType = undefined>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  customOptions: any = {},
  body?: BodyType
) {
  const options: any = {
    method,
    headers: customOptions.headers || {},
    next: { revalidate: 0 },
    ...customOptions,
  };

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
}

async function get<BodyType>(
  url: string,
  customOptions: { nextRevalidate?: number } & any = {}
): Promise<BodyType> {
  const { nextRevalidate, ...options } = customOptions;

  if (nextRevalidate) {
    options.next = options.next
      ? { ...options.next, revalidate: nextRevalidate }
      : { revalidate: nextRevalidate };
  }

  return await request(url, getOptions("GET", options));
}

async function post<BodyType, PostResponseType = BodyType>(
  url: string,
  body: BodyType,
  customOptions?: any
): Promise<PostResponseType> {
  return await request(url, getOptions("POST", customOptions, body));
}

async function put<BodyType, PutResponseType = BodyType>(
  url: string,
  body: BodyType,
  customOptions?: any
): Promise<PutResponseType> {
  return await request(url, getOptions("PUT", customOptions, body));
}

async function del<DeleteResponseType = any>(
  url: string,
  customOptions?: any
): Promise<DeleteResponseType> {
  return await request(url, getOptions("DELETE", customOptions));
}

const api = {
  get,
  post,
  put,
  del,
};

export default api;
