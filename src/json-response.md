---
title: "JsonResponse"
draft: false
weight: 5
---

## JSON Response.

1. Import it in your code:
```zig
const zinc = @import("zinc");
```

2. Create a handle function for http request.
```zig
fn helloWorld(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    try ctx.json(.{ .message = "Hello, World!" }, .{});
}
```

3. Complete code.
```zig
const zinc = @import("zinc");

pub fn main() !void {
    var z = try zinc.init(.{ .port = 8080 });

    var router = z.getRouter();
    try router.get("/", helloWorld);
    
    try z.run();
}

fn helloWorld(ctx: *zinc.Context, _: *zinc.Request, _: *zinc.Response) anyerror!void {
    try ctx.json(.{ .message = "Hello, World!" }, .{});
}
```

Read more information about [Examples](https://github.com/zon-dev/zinc-examples).

