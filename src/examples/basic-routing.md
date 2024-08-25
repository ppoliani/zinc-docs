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

var router = z.getRouter();
try router.get("/hello", helloWorld);
try router.post("/hi", hi);
try router.add(&.{ .GET, .POST }, "/ping", pong);

```

3. Complete code.
```zig
const std = @import("std");
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });

    var router = z.getRouter();
    try router.get("/hello", helloWorld);
    try router.post("/hi", hi);
    try router.add(&.{ .GET, .POST }, "/ping", pong);

    try z.run();
}

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

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

