---
title: "Basic routing"
draft: false
weight: 3
---

## Basic routing.

1. Import it in your code:
```zig
const zinc = @import("zinc");
```

2. Create handle functions to process the HTTP request
```zig
fn helloWorld(ctx: *zinc.Context) anyerror!void {
    try ctx.json(.{ .message = "Hello, World!" }, .{});
}
fn hi(ctx: *zinc.Context) anyerror!void {
    try ctx.text("Hi!", .{});
}
fn pong(ctx: *zinc.Context) anyerror!void {
    try ctx.html("<h1>Pong!</h1>", .{});
}
```

3. Create an zinc engine, and add handle function to router.
```zig
var z = try zinc.init(.{ .port = 8080 });
defer z.deinit();

var router = z.getRouter();
try router.get("/hello", helloWorld);
try router.post("/hi", hi);
try router.addAny(&.{ .GET, .POST }, "/ping", pong);

```

3. Complete code.
```zig
const std = @import("std");
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });
    defer z.deinit();

    var router = z.getRouter();
    try router.get("/hello", helloWorld);
    try router.post("/hi", hi);
    try router.addAny(&.{ .GET, .POST }, "/ping", pong);

    // add a group
    var usergroup = try router.group("/user");
    try usergroup.addAny(&.{ .GET, .POST }, "/login", user);
    try usergroup.post("/logout", user);

    // add a group
    var admingroup = try router.group("/admin");
    try admingroup.addAny(&.{ .GET, .POST }, "/login", user);
    try admingroup.post("/logout", user);

    // print the router
    router.printRouter();

    try z.run();
}

fn helloWorld(ctx: *zinc.Context) anyerror!void {
    try ctx.json(.{ .message = "Hello, World!" }, .{});
}
fn hi(ctx: *zinc.Context) anyerror!void {
    try ctx.html("<h1>Hi!</h1>", .{});
}
fn pong(ctx: *zinc.Context) anyerror!void {
    try ctx.text("pong!", .{});
}
fn user(ctx: *zinc.Context) anyerror!void {
    try ctx.text("User group.", .{});
}
```

outputs:
```
|/
|  /hi  { POST }
|  /admin
|    /logout  { POST }
|    /login  { GET, POST }
|  /ping  { GET, POST }
|  /hello  { GET }
|  /user
|    /logout  { POST }
|    /login  { GET, POST }
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

