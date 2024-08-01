---
title: "JsonResponse"
draft: false
weight: 5
---

## JSON Response.

1. Import it in your code:
```zig
const z = @import("zinc");
```

2. Create a handle function for http request.
```zig
fn hello_world(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.JSON(.{}, .{ .message = "Hello, World!" });
}
```

3. Complete code.
```zig
const z = @import("zinc");

pub fn main() !void {
    var engine = try z.Engine.new(.{ .port = 8080 });

    var router = &engine.router;
    try router.get("/", hello_world);
    _ = try engine.run();
}

fn hello_world(ctx: *z.Context, _: *z.Request, _: *z.Response) anyerror!void {
    try ctx.JSON(.{}, .{ .message = "Hello, World!" });
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

