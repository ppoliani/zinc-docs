---
title: "Redirects"
draft: false
weight: 5
---

## Redirects

Issuing a HTTP redirect is easy. Both internal and external locations are supported.
```zig
fn redirect(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    // Redirect to /hello, with a 302 status code
    try ctx.redirect(.found, "/hello");
}

fn redirectToGitHub(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    // Redirect to https://github.com, with a 301 status code
    try ctx.redirect(.moved_permanently,"https://github.com");
}
```

2. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });

    var router = z.getRouter();
    try router.get("/test", redirect);
    try router.get("/github", redirectToGitHub);
    try router.get("/hello", helloWorld);

    try z.run();
}

fn redirect(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    // Redirect to /hello, with a 302 status code
    try ctx.redirect(.found, "/hello");
}
fn redirectToGitHub(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    // Redirect to https://github.com, with a 301 status code
    try ctx.redirect(.moved_permanently,"https://github.com");
}

fn helloWorld(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    try ctx.text("Hello world!", .{});
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

