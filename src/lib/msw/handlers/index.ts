import { http, HttpResponse, type RequestHandler } from "msw";

const helloHandler = http.get("http://localhost:3000/", () => {
  return HttpResponse.json({
    message: "Hello, world!",
  });
});

export const handlers: RequestHandler[] = [helloHandler];