---
title: "BasicRouting"
draft: false
weight: 3
---

## Example.

1. Import it in your code:
```zig
const z = @import("zinc");
```

2. Create a handle function for http request.
```zig
fn helloWorld(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.JSON(.{}, .{ .message = "Hello, World!" });
}
```

3. Create an zinc engine, and add handle function to router.
```zig
var zinc = try z.Engine.init(.{ .port = 8080 });

var router = zinc.getRouter();
try router.get("/hello", helloWorld);
```

3. Complete code.
```zig
const std = @import("std");
const z = @import("zinc");

pub fn main() !void {
    var zinc = try z.Engine.init(.{ .port = 8080 });

    var router = zinc.getRouter();
    try router.get("/hello", helloWorld);
    try router.post("/hi", hi);
    try router.add(&.{ .GET, .POST }, "/ping", pong);

    try zinc.run();
}

fn helloWorld(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.JSON(.{}, .{ .message = "Hello, World!" });
}

fn hi(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.Text(.{}, "hi!");
}

fn pong(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.Text(.{}, "pong!");
}

```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

